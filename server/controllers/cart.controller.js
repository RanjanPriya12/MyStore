const express=require('express');
const CartProduct=require('../models/cart.model');
const router=express.Router();

router.post('/',async(req,res)=>{
    try {
       const cartProduct=CartProduct.create(req.body);
       return res.status(200).send(cartProduct); 
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});

router.get('/:id',async(req,res)=>{
    try {
       const cartProduct=CartProduct.findById(req.params.id).populate('productId').lean().exec();
       return res.status(200).send(cartProduct); 
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
});


router.get('/',async(req,res)=>{
    try {
       const cartProducts=CartProduct.find().populate('productId').lean().exec();
       return res.status(200).send(cartProducts); 
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});


router.delete('/',async(req,res)=>{
    try {
       const cartProduct=CartProduct.findOneAndDelete({
        $and:[{productId:req.query.productId},{userId:req.query.userId}]
       });
       return res.status(200).send(cartProduct); 
    } catch (error) {
        return res.status(400).send({message:error.message});
    }
});

module.exports=router;