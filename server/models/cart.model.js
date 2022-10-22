const mongoose=require('mongoose');

const cartSchema=new mongoose.Schema({
    userId: {type:String,required:true},
    productId:{type: String,required: true,}
},
{
    timestamps:true,
    versionKey:false
});

const CartProduct= new mongoose.model('cart', cartSchema);

module.exports=CartProduct;