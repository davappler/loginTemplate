// this is the file for authentication routes

const router = require("express").Router();

router.post("/register",(req,res)=>{
    res.send("register");
})

module.exports=router;