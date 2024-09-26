const User = require("../models/User");



exports.registerUser = (req, res) => {
    User.findOne({ email : req.body.email }).then((result) => {
        if(result != null && result.email == req.body.email){
            return res.send("Duplicate email found");
        } else {
            if(req.body.firstName !== '' && req.body.lastName !== '' && req.body.email !== '' && req.body.password !== ''){
                let newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    email: req.body.email,
                    password : req.body.password
                });
    
                newUser.save()
                .then((savedPost) =>res.send("New user registered"))
                .catch((err) => res.send(err));
            } else {
                return res.send("All fields must be provided");
            }           
        }
    })
    .catch((err) => res.send(err));
};

exports.loginUser = (req, res) => {
    User.findOne({ email : req.body.email }).then((result) => {
        if(result != null && result.email == req.body.email){
            if(result.password === req.body.password){
                return res.send("Thank you for logging in!");
            } else {
                return res.send("Wrong Password");
            }
        } else {
            return res.send("Email does not exist");            
        }
    })
    .catch(err => res.send(err));
};

exports.updateUserDetails = (req, res) => {
    const userId = req.params.id;
    const updateData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    };

    User.findByIdAndUpdate(userId, updateData, { new: true })
        .then(() => res.send(true))
        .catch(() => res.send(false));
};