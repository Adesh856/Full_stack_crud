const mongoose=require("mongoose")

const Uerschema=mongoose.Schema({
    email:{type:String,required:true,unique:true} ,
    name:String,
    age:String,
    location:String,
    password:String,
},{
    versionKey:false
})

const UserModel=mongoose.model("UserDetails",Uerschema)

module.exports={UserModel}