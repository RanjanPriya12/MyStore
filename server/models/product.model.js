
const mongoose = require("mongoose");

const reviewSchema=new mongoose({
    user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true},
    userName:   { type: String, required:true},
    comment:{ type: String, require:false},
    rating:{ type: Number, required:true},
},{
    timestamps : true
});

const productSchema = new mongoose.Schema({
    title:{ type: String, required:true},
    price: { type: Number, required:true},
    image_url: { type: String, required:true},
    prod_desc:{ type: String, required:true},
    discount: { type: Number, required:true},
    countInStock: { type: Number, required:true},
    color:{ type:String, required:true},
    review:[reviewSchema],
    size:{ type:[Number], required:false},
    brand: { type: Number, required:true},
    rating: { type: Number, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    // user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true}
},{
    timestamps : true,
    versionKey : false,
});


const Product = mongoose.model("product", productSchema)

module.exports = Product;