const express = require("express");
const { connectTomongodb } = require("./connect");
const urlRoute = require('./routes/url');
const path = require('path');
const url = require('./models/url');
const staticroute=require('./routes/staticRouter');

const app = express();
const PORT = 8001;

connectTomongodb("mongodb://127.0.0.1:27017/project2url")
    .then(() => console.log("mongodb connected"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));



app.set("view engine", "ejs");
app.set("views" , path.resolve("./views"));

app.get("/", staticroute);
app.use("/url", urlRoute);


app.get('/url/:shortid', async (req, res) => {
    const shortid = req.params.shortid;
    const entry = await url.findOneAndUpdate(
        { shortid },
        {
            $push: {
                visithistory: {
                    timestamp: Date.now(),
                },
            },
        },
        { new: true } // Return the updated document
    );

    if (!entry) {
        return res.status(404).json({ error: "url not found" });
    }

    res.redirect(entry.redirecturl);
});

app.listen(PORT, () => console.log(`The server started at port: ${PORT}`));





































































