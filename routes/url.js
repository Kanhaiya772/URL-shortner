const express= require('express');
const router = express.Router();
const {handlegeneratenewshortURL,handlegetanalytics }=require("../controllerrs/url")

router.post("/", handlegeneratenewshortURL);
router.get('/analytics/:shortid', handlegetanalytics);

module.exports=router;
