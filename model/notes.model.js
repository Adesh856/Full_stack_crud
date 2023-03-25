const mongoose=require("mongoose")
const notesSchema=mongoose.Schema({
    title:{type:String,required:true},
    sub:{type:String,required:true},
    userid:{type:String,required:true},
},{
    versionKey:false
})


const notesModel=mongoose.model("notescollections",notesSchema)

module.exports={notesModel}