const bcrypt = require('bcrypt');

const User = require("../models/User");

const auth = require("../auth");
const { errorHandler } = auth;




//[SECTION] User registration
module.exports.registerUser = (req, res) => {

   
    if (!req.body.email.includes("@")){
        return res.status(400).send({ error: 'Email Invalid' });
    }
   
    else if (req.body.mobileNo.length !== 11){
        return res.status(400).send({ error: 'Mobile number invalid' });
    }
 
    else if (req.body.password.length < 8) {
        return res.status(400).send({ error: 'Password must be atleast 8 characters' });
    } else {
        let newUser = new User({
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            email : req.body.email,
            mobileNo : req.body.mobileNo,
            password : bcrypt.hashSync(req.body.password, 10)
        })

        return newUser.save()
        .then((result) => res.status(201).send({
            message: 'Registered Successfully',
            user: result
        }))
        .catch(error => errorHandler(error, req, res));
    }
};

//[SECTION] User login
/*module.exports.loginUser = (req, res) => {
    if (req.body.email.includes("@")) {
        return User.findOne({ email: req.body.email })
            .then(result => {
                if (result == null) {
                    console.log('server message: 404 No email found');
                    return res.status(404).send({ error: 'No email found' });
                } else {
                    const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                    if (isPasswordCorrect) {
                        return res.status(200).send({
                            message: 'User logged in successfully',
                            access: auth.createAccessToken(result)
                        });
                    } else {
                        console.log('server message: 401 Email and password do not match')
                        return res.status(401).send({ error: 'Email and password do not match' });
                    }
                }
            })
            .catch(error => {
                console.error(error); 
                return res.status(500).send({ error: 'Internal Server Error' });  
            });
    } else {
        return res.status(400).send({ error: 'Invalid Email' });
    }
};
*/

module.exports.loginUser = (req, res) => {
    if (req.body.email.includes("@")) {
        return User.findOne({ email: req.body.email })
            .then(result => {
                if (result == null) {
                    return res.status(404).send({ error: 'No email found', log: 'server message: 404 No email found' });
                } else {
                    const isPasswordCorrect = bcrypt.compareSync(req.body.password, result.password);
                    if (isPasswordCorrect) {
                        return res.status(200).send({
                            message: 'User logged in successfully',
                            access: auth.createAccessToken(result),
                            log: 'server message: 200 User logged in successfully'
                        });
                    } else {
                        return res.status(401).send({ error: 'Email and password do not match', log: 'server message: 401 Email and password do not match' });
                    }
                }
            })
            .catch(error => {
                return res.status(500).send({ error: 'Internal Server Error', log: 'server message: 500 Internal Server Error' });
            });
    } else {
        return res.status(400).send({ error: 'Invalid Email', log: 'server message: 400 Invalid Email' });
    }
};




//[Section]  User details
// User details
/*module.exports.getProfile = (req, res) => {
    return User.findById(req.user.id)
    .then(user => {
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        } else {
            user = user.toObject(); 
            delete user.password;
            return res.status(200).send(user);
        }
    })
    .catch(error => errorHandler(error, req, res));
}; */

module.exports.getProfile = (req, res) => {
    return User.findById(req.user.id)
    .then(user => {
        if (!user) {
            return res.status(404).send({ error: 'User not found' });
        } else {
            user = user.toObject(); 
            delete user.password;
            return res.status(200).send({ user });
        }
    })
    .catch(error => errorHandler(error, req, res));
};


//[Section] Update password
/*module.exports.updatePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { id } = req.user; 

   
    const hashedPassword = await bcrypt.hash(newPassword, 8);

    await User.findByIdAndUpdate(id, { password: hashedPassword });

    res.status(201).json({ message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};*/

module.exports.updatePassword = async (req, res) => {
  try {
    const { newPassword } = req.body;
    const { id } = req.user; 

    const hashedPassword = await bcrypt.hash(newPassword, 8);

    await User.findByIdAndUpdate(id, { password: hashedPassword });

    res.status(201).json({ message: 'Password reset successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};



/*module.exports.updateUserAsAdmin = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ error: 'User ID is required' });
    }

    User.findByIdAndUpdate(id, { isAdmin: true }, { new: true })
        .then(user => {
            if (user) {
                res.status(200).send({ message: 'User updated to admin successfully', updatedUser });
            } else {
                res.status(403).send({ error: 'User not found' });
            }
        })
        .catch(error => res.status(500).send({ error: 'Internal Server Error' }));
};
*/

module.exports.updateUserAsAdmin = (req, res) => {
    const { id } = req.params;

    if (!id) {
        return res.status(400).send({ error: 'User ID is required' });
    }

    User.findByIdAndUpdate(id, { isAdmin: true }, { new: true })
        .then(user => {
            if (user) {
                res.status(200).send({ message: 'User updated to admin successfully', updatedUser: user });
            } else {
                res.status(403).send({ error: 'User not found' });
            }
        })
        .catch(error => res.status(500).send({ error: 'Internal Server Error' }));
};







  