const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({ 
    firstName : String,
    lastName: String,
    email: String,
    isAdmin: Boolean,
    password: String
});

const User = mongoose.model("User", userSchema); 

module.exports = User;
