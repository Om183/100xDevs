// const date = new Date();
// console.log(date.getFullYear());
// console.log(date.getHours());
// console.log(date);
// console.log(date.getTime());

const fs = require("fs");

function kiratReadsFile(fn){
    fs.readFile("a.txt","utf-8",function(err,data){
        fn(data);
    })
}

function onDone(data){
    console.log(data); 
}

kiratReadsFile(onDone);




function KiratReadsFile(){
    return new Promise(function(resolve){
        fs.readFile("a.txt","utf-8",function(err,data){
            resolve(data);
        })
    })
}

function OnDone(data){
    console.log(data);
}

KiratReadsFile().then(OnDone);

