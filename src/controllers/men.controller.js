const express = require("express");
const router = express.Router();

const Men = require("../models/men.model");

router.get("", async(req,res)=>{
    try {
        const users = await Men.find().lean().exec();
        return res.status(201).send({mens:users});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const item = await Men.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

module.exports = router;