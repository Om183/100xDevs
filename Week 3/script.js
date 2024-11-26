const express = require("express");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456"

const app = express();
app.use(express.json());

const allUsers = [
    {
        name: "Om Warkad",
        username: "om183",
        password: "123321"
    },
    {
        name: "Prashant Mete",
        username: "prashant007",
        password: "12344321"
    },
    {
        name: "Virat Kohli",
        username: "vk18",
        password: "181818"
    }
];

function userExixts(username,password){
    for(let i=0;i<allUsers.length;i++){
        if(allUsers[i].username==username && allUsers[i].password==password){
            return true;
        }
    }
    return false;
}


app.post('/signin',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    if(!userExixts(username,password)){
        return res.status(403).json({
            msg : "User dosent exists."
        });
    }

    var token = jwt.sign({username:username}, jwtPassword);
    return res.json({
        token,
    });

});

app.get('/users',(req,res)=>{
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        res.json({
            users: allUsers,
        })

     } catch (error) {
         return res.status(403).json({
             msg: "Invalid Token",
         });
     }
});

app.listen(3000);