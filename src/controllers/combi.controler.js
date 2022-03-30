const express = require("express");
const router = express.Router();

const Combi = require("../models/combi.model");

router.get("", async(req,res)=>{
    try {
        const combi = await Combi.find().lean().exec();
        return res.status(201).send({combi:combi});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.post("/",async(req,res)=>{
    try {
        const item = await Combi.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

module.exports = router;