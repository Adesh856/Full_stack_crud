const express=require("express")
const userRouter=express.Router()
const {UserModel}=require("../model/user.model")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")

userRouter.post("/register",async(req,res)=>{
    const {email,password,age,location,name}=req.body
    try {
        bcrypt.hash(password, 5, async function(err, hash) {
            // Store hash in your password DB.
            const user=new UserModel({email,password:hash,age,location,name})
            await user.save()
            res.status(200).send({"msg":"User has been added"})  
        });
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

userRouter.post("/login",async(req,res)=>{
    const {email,password}=req.body
    console.log(email,password)
    try {
        const user=await UserModel.findOne({email})
        console.log(user)
        if(user){
        bcrypt.compare(password, user.password, function(err, result) {
            // result == true
            if(result){
                res.status(200).send({"msg":"Login Succesfully","token":jwt.sign({"userid":user._id},`FullStackCrud`,{expiresIn:'1h'})})
            }
        });
    }else{
     res.status(200).send({"msg":"Wrong Credentials"})
    }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})
module.exports={userRouter}


