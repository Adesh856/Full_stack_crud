
const express=require("express")
const {notesModel}=require("../model/notes.model")
const notesRouter=express.Router()

notesRouter.get("/",async(req,res)=>{
    try {
        console.log(req.body)
        const {userid}=req.body
        const user=await notesModel.find({userid:userid})
        res.status(200).send(user)
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

notesRouter.post("/add",async(req,res)=>{
    try {
        const payload=req.body
        const notes=new notesModel(payload)
        await notes.save()
        res.status(200).send({"msg":"Notes has been added"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})


notesRouter.patch("/update/:id",async(req,res)=>{
     const {id}=req.params
    try {
        const payload=req.body
        await notesModel.findByIdAndUpdate({_id:id,userid:req.body.userid},payload)
        res.status(200).send({"msg":"Notes has been updated"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})

notesRouter.delete("/delete/:id",async(req,res)=>{
    const {id}=req.params
    try {
        await notesModel.findByIdAndDelete({_id:id,userid:req.body.userid})
        res.status(200).send({"msg":"Notes has been deleted"})
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})
module.exports={notesRouter}