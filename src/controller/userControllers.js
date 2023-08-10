const userModel = require("../model/userModel");
const message = require("../../helper/message");
const logger = require("../../config/logger")
const jwt = require("jsonwebtoken")
const {comparPassword} = require("../auth/authPassword")

exports.createUser = async (req,res) => {
    try {
        const {email,password} = req.body
        const findEmail = await userModel.findOne({email})
        if(findEmail)
        {
            res.message = req.t('failRegister');
            return message.badRequest(res);
        }
        const result = await new userModel(req.body).save();
        res.message = req.t('successRegister');
        message.success(result,res)
        // sendUserEmail({name,email})
        
    } catch (error) {
        logger.error(`Server Error : ${error.message}`)
    }
}


// Login User
exports.login = async (req,res) => {
    try {

    const {email, password} = req.body;
    if(!email || !password) {
        res.message = req.t('enterCredentials');
        return message.badRequest(res);
    }

    //Check Email Register Or Not
    const user = await userModel.findOne({ email });
    if (!user) {
        res.message = req.t('notRegistered');
        return message.badRequest(res);
    }

    // Check The Password
    const match = await comparPassword(password, user.password);
    if (!match) {
        res.message = req.t('invalidPassword');
        return message.badRequest(res);
    }

    const token = await jwt.sign({_id:user._id}, process.env.JWT_SECRET , {expiresIn : "5 hour"});
    user.tokens.push({token});
    await user.save();

    res.message = req.t('loginSuccess');
    message.success(user,res)

    } catch (error) {
        logger.error(`Server Error : ${error.message}`)
    }
    

}

// Logout User
exports.logout = async (req,res) => {

}