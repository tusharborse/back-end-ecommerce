const express = require("express")
const router = express.Router();

router.get("/",(req,res)=>{
    console.log(req.body);
    res.send("welcome user")
})

router.post("/register",(req,res)=>{
    console.log(req.body);
    res.status(200).send(req.body)
})

module.exports = router;