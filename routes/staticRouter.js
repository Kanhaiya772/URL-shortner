const express= require('express');
const url = require('../models/url');
const router = express.Router();

module.exports=router;
router.get("/", async (req,res)=>{
    const allurls= await url.find({});
    return res.render("home", {
        urls:allurls
    });
});