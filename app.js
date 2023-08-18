const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const port = 5000;
const dotenv = require("dotenv").config();
const {userInfo} = require("./modals/userModal")
const userController = require("./routes/userRoute")


app.use(cors());
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

app.listen(port, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`backend server started at ${port}`)
    }
})
mongoose.connect(process.env.MONGODB_ADDRESS).then((err) => {
    // console.log(err)
    console.log("database connected")
})

app.get("/",(req,res)=>{
    res.send("this test is successfull")
})

app.use("/user",userController)