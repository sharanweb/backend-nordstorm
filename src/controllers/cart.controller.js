const express = require("express");
const router = express.Router();

const Cart = require("../models/cart.model");


router.post("/",async(req,res)=>{
    try {
        const cart = await Cart.create(req.body);
        return res.status(201).send(carts);
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


router.get("", async(req,res)=>{
    try {
        const cart = await Cart.find().lean().exec();
        return res.status(201).send({cart:carts});
    } catch (error) {
        return res.status(500).send({message: error.message});
    }
});


module.exports = router;