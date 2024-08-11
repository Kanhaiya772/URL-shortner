const Shortid = require("shortid"); // Require the Shortid library
const url = require("../models/url"); // Require the URL model

// Async function to handle the generation of a new short URL
async function handlegeneratenewshortURL(req, res) {
    const body = req.body; // Get the request body
    console.log(body.url); // Log the URL from the request body

    // If the URL is not provided, return a 400 error
    if (!body.url) {
        return res.status(400).json({ error: "url is required" });
    }

    const shortid = Shortid(); // Generate a unique shortid
    // Create a new URL entry in the database
    await url.create({
        shortid: shortid,
        redirecturl: body.url,
        visithistory: [],
    }).then(()=> console.log("request processed"));

    // Return the generated shortid in the response
    // return res.json({ id: shortid });
    return res.render("home" ,{
        id: shortid,
    })
}

async function handlegetanalytics(req , res ){
    const getid = req.params.Shortid;
    const result= await url.findOne({ getid});

   
    
    return res.json({
        totalclicks: result.visithistory.length,
        analytics: result.visithistory,
    });
}

// Export the handlegeneratenewshortURL function
module.exports = {
    handlegeneratenewshortURL,
    handlegetanalytics,
};


