const express = require('express');
const app = express();


var users = [
    {
        name: "John",
        kidneys:[{
            healthy: false
            },{
            healthy: true
            }
        ]
    },
    {
        name: "Om",
        kidneys:[{
            healthy: true
            }    
        ]
    }
]

app.get('/',(req,res)=>{
    const name = users[1].name;
    const health = users[1].kidneys[0].healthy;
    if(health){
        res.send(`${name} has good kidney Health`);
    }
    else{
        res.send(`${name} has bad kidney Health`);
    }
})

app.post('/',(req,res)=>{

})

app.put('/',(req,res)=>{

})

app.delete('/',(req,res)=>{

})

app.listen(3000);