const express=require("express")
var cors = require('cors')
const {connections}=require("./db")
const {userRouter}=require("./Routes/user.route")
const {notesRouter}=require("./Routes/notes.route")
const {auth}=require("./middelware/auth.middleware")
 require("dotenv").config()
 const app=express()
 app.use(cors())
app.use(express.json())
app.use("/user",userRouter)

app.use(auth)
app.use("/notes",notesRouter)
app.listen(process.env.port,async()=>{
    try {
         await connections
         console.log("MongoDB is connected with server")
    } catch (error) {
        console.log("MongoDB is not connected with server")
    }
    console.log(` Server connected at ${process.env.port} port`)
 })