const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String,
    password : String,
    mobileNumber : String,
    gender : String,
    salary : String,
    city : String,
    state : String,
    country : String,
    zipCode : String,
    hobby : String,
    isActive : Boolean,
    tokens:[
        {
            token : {
                type : String,
                required : true
            }
        }
    ],
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;