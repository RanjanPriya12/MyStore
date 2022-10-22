const mongoose=require('mongoose');

const orderSchema= new mongoose.Schema({
    userId:{ type:String, require:true},
    username:{type:String, require:true},
    email:{type:String, require:true},
    orderItems:[{
        title:{ type:String, require:true},
        qty:{type:Number, require:true},
        productId:{type:String, require:true}
    }],
    price:{type:Number,require:true},
    shippingAddress:{
        address:{type:String, require:true},
        city:{type:String, require:true},
        postalCode:{type:Number, require:true},
        country:{type:String, require:true},
    },
    orderAmount:{type:Number, require:true},
    transactionId:{type:String, require:true},
    isDelivered:{type:Boolean, require:true},
},{
    timestamps:true,
    versionKey:false
});

const Order= new mongoose.model('order',orderSchema);

module.exports=Order;