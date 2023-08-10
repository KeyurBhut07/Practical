const jwt = require("jsonwebtoken")
const userModel = require("../model/userModel")
const message = require("../../helper/message")

const requireSignIn  = async (req,res,next) => {
    try {
        const token = req.headers.authorization;
        const verifyToken = jwt.verify(token,process.env.JWT_SECRET)
        const user = await userModel.findOne({_id : verifyToken._id , "tokens.token" : token})
        if(!user){
            res.message = req.t('login');
            return message.badRequest(res);
        }
        req.token = token
        req.user = user;
        next();
    } catch (error) {
        res.message = req.t('login');
        message.badRequest(res);
    }
}

const isAdmin = async (req,res,next) =>{
    try {
        const user = await userModel.findOne(req.user._id)
    if(user.role != "admin")
    {
        res.message = req.t('unAuthenticated');
        return message.badRequest(res);
    }
    next();
    } catch (error) {
        res.message = req.t('login');
        message.badRequest(res);
    }
}

module.exports = {requireSignIn , isAdmin}