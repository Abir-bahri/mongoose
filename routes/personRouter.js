const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const User = require("../models/userSchema")

router.post("/newPerson",(req,res)=>{
      const {name,age,favoriteFoods}=req.body;
  
      const newUser = new User({name,age,favoriteFoods});
   
      newUser.save()
      .then((newUser)=>res.send(newUser))
      .catch((err)=>res.status(404).send({msg:"cannot add user"}))
   
})
// model.find
router.get("/find-users",(req,res)=>{
  User.find()
  .then((data)=>{res.send(data)})
  .catch((err)=>res.status(500).send(err))
})

  // model.findOne
// router.get("/findOne-user/:id",(req,res)=>{
//     User.findOne({_id:req.params.id})
//     .then((data)=>{res.send(data)})
//     .catch((err)=>res.status(500).send(err))
// })

// model.findById()
router.get("/find-user/:id",(req,res)=>{
  User.findById({_id:req.params.id})
  .then((data)=>{res.send(data)})
  .catch((err)=>res.status(500).send(err))
})
  
//  model.findOneAndUpdate()
router.put("/update/:id",(req,res)=>{
  User.findByIdAndUpdate({_id:req.params.id},{...req.body},(err,data)=>{
      if (err) throw err
      else res.json(req.body)
  })
})
// model.findbyIdanddelete
router.delete("/delete/:id",(req,res)=>{
  User.findByIdAndDelete({_id:req.params.id},(err,data)=>{
      if(err) throw err 
      else res.json({msg:"deleted"})
  })
})
  // model.delete()
router.get("/delete-users",(req,res)=>{
  User.remove()
  .then((data)=>{res.send(data)})
  .catch((err)=>res.status(500).send(err))
})   
  // Find people who like "burrito". Sort them alphabetically by name,
// Limit the results to two documents, and hide their age.
// Chain `.find()`, `.sort()`, `.limit()`, `.select()`, and then `.exec()`,
// passing the `done(err, data)` callback to it.

var queryChain = function(done) { var foodToSearch = "burrito"; User
    .find({favoriteFoods:foodToSearch}) 
    .sort({name : "asc"}) 
    .limit(2) 
    .select("-age") 
    .exec((err, data) => { if(err) done(err); done(null, data); }) };
    queryChain((err,data)=>err ? console.log(err) : console.log(data))
module.exports=router

