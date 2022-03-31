const express = require("express");
const router = express.Router();

const Cart = require("../models/cart.model");


router.post("/",async(req,res)=>{
    try {
        const cart = await Cart.create(req.body);
        return res.status(201).send(cart);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


router.get("/", async(req,res)=>{
    try {
        const cart = await Cart.find().lean().exec();
        return res.status(201).send({"cart":cart});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});

router.delete("/:id", async(req,res)=>{
    try {
        const cart = await Cart.findByIdAndDelete(req.params.id, req.body).lean().exec();
        return res.status(201).send({"cart":cart});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


module.exports = router;