const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port=5000 

app.use(express.json())

mongoose.connect("mongodb+srv://abir:abirabir@cluster0.k52cc.mongodb.net/firstmongoose?retryWrites=true&w=majority",

(err)=>{
    if(err) throw err
    else console.log("database is connected")
});
const chain = require("./routes/personRouter").queryChain;

app.use('/',require("./routes/personRouter.js"));
app.listen(port,()=>console.log("listening in port 5000"))