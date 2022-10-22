const express=require('express');
const stripe=require('stripe')('API_KEY');
const router=express.Router();
const {v4:uuidv4}=require('uuid')

router.post('/placedItems', async(req,res)=>{
    const { token, cartItems, currentUser, subtotal }=req.body;
    const customer=await stripe.customers.create({
        email:token.email,
        source:token.id
    });

    const payment=await stripe.charges.create({
        amount:subtotal*100,
        currency:'inr',
        customer:customer.id,
        receipt_email:token.email
    },
    {
        idempotencyKey:uuidv4()
    });

    if(payment){
        res.send('payment Successful');
    }else{
        return res.status(400).json({message:'payment Failed'});
    }

});

module.exports=router;