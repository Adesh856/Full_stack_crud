const jwt=require("jsonwebtoken")

const auth=(req,res,next)=>{
    const token=req.headers.authorization.split(" ")[1]
    if(token){
        jwt.verify(token,"FullStackCrud",(err,decoded)=>{
            if(err){
                res.status(400).send({"msg":err.name})
            }else if(decoded){
                console.log(decoded)
                req.body.userid=decoded.userid
                next()
            }
        })
    }else{
        res.status(400).send({"msg":"Invalid password"})
    }
}
module.exports={auth}