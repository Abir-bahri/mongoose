const mongoose = require('mongoose')
// require('dotenv'.config({path:'./.env'}))
// require('dotenv').config()
// MONGO_URI=process.env.MONGO_URI

const connectDB=()=>{
    mongoose.connect("mongodb+srv://abiradmin:abir@admin@cluster0.k52cc.mongodb.net/firstmongoose?retryWrites=true&w=majority",(err)=>{
        if(err) throw err
        else console.log("database is connected")
    })
}
module.exports=connectDB