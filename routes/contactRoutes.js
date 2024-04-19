const express = require("express");
const router = express.Router();


router.routes("/api/contacts",(req,res)=>{
    res.json({message:"get all contacts !"})
})