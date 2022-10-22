const express=require('express');
const connectDB = require("./configs/db");
const userController=require('./controllers/user.controller');
const registerController = require("./controllers/register.controller");
const loginController = require("./controllers/login.controller");
const {register,login } = require("./controllers/auth.controller");
const orderController=require('./controllers/order.controller');
const productController=require("./controllers/product.controller");
const cartController=require("./controllers/cart.controller");

const app=express();
app.use(express.json());


app.use("/api/users", userController);

app.use("/api/register", registerController,register);

app.use("/api/login", loginController,login);

app.use("/api/products", productController);

app.use("/api/cart",cartController);

app.use("/api/order", orderController);


const port=5000;
app.listen(port,async()=>{
    try {
        await connectDB();
    } catch (error) {
        console.log('error',error);
    }
    console.log(`listening at port number http://localhost:${port}`);
})