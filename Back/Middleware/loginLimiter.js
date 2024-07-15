const rateLimit=require("express-rate-limit")
const {logEvents}=require("./logger")


const loginLimiter=rateLimit({
    windowMs:60*1000,
    max:5,
    message:"Too many login attempts, please try again after 60 seconds",
    handler:(req,res,opts)=>{
        logEvents(`Too many login attempts from ${req.ip}`, "errLog.log")
        res.status(opts.statusCode).json({msg:opts.message})
    },
    standardHeaders:true,
    legacyHeaders:false
        })  


module.exports=loginLimiter
