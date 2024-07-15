const notFound=(req,res)=>{
    res.status(404).send("Sorry Requested route Does not Exits")


}
module.exports=notFound;