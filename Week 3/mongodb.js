// MONGO_URL = "mongodb+srv://omwarkad97:GNMHemncr2xc76Iq@cluster0.ayvrl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";
const mongoose = require("mongoose");
const app = express();

mongoose.connect("mongodb+srv://omwarkad97:GNMHemncr2xc76Iq@cluster0.ayvrl.mongodb.net/user_app?retryWrites=true&w=majority&appName=Cluster0");
const User = mongoose.model('unique_users',{name: String, email: String,password: String});

app.use(express.json());

function userExixts(username,password){

}

app.post("/signup",async (req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstname;

    const existingUser = await User.findOne({email: username});
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name: firstName,
        email: username,
        password: password
    })
    user.save();

    res.json({
        "msg":"User Created Successfully"
    })

})

app.post("/signin",(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    
})

app.get("/",(req,res)=>{
    res.send("HI OM")
})

app.listen(3000);
