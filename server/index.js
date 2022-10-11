const express=require('express');
const connectDB = require("./configs/db");
const userController=require('./controllers/user.controller');
const registerController = require("./controllers/register.controller")
const loginController = require("./controllers/login.controller")
const {register,login } = require("./controllers/auth.controller")

const app=express();
app.use(express.json());


app.use("/users", userController);

app.use("/register", registerController,register);

app.use("/login", loginController,login);


const port=5000;
app.listen(port,async()=>{
    try {
        await connectDB();
    } catch (error) {
        console.log('error',error);
    }
    console.log(`listening at port number http://localhost:${port}`);
})