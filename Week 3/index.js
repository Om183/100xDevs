const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/health-checkup",(req,res)=>{

    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    res.send({
        response
    });
    // const kidneyLength = kidneys.length;

    // res.send("You have " + kidneyLength +" kidneys");

});

app.use((err,req,res,next)=>{
    res.json({
        msg:"Sever Crashed !"
    })
})

app.listen(3001);