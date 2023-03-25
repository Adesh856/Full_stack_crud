const mongoose=require("mongoose")
require("dotenv").config()
const connections=mongoose.connect(process.env.mongourl)
 module.exports={connections}