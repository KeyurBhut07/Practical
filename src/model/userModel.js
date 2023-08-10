const mongoose = require('mongoose');
const authService = require('../auth/authPassword');

const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    password : String,
    phone : String,
    gender : String,
    position : String,
    dob : String,
    city : String,
    state : String,
    country : String,
    zipCode : String,
    isActive : Boolean,
    role :  String,
    tokens:[
        {
            token : {
                type : String,
                required : true
            }
        }
    ],
},{
    timestamps : true,
})

userSchema.pre('save',async function (next) {
    const user = this
    user.password = await authService.hashPassword(user.password)
    next()
})


const userModel = mongoose.model('User', userSchema);

module.exports = userModel;