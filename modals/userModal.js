const mongoose = require("mongoose");

const UserInfoSchema = mongoose.Schema({
    userName: {
        type: String,
        require: true
    },
    userEmail: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    }
})

const userInfo = mongoose.model("userInfo", UserInfoSchema);

module.exports = { userInfo };