const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema= new Schema({
    name:{
        required:true,
        type:String
    },
    age:Number,
    favoriteFoods:{
        type:[String],
        
        default: undefined
    },
    
    
   
})
module.exports=mongoose.model("User",userSchema)