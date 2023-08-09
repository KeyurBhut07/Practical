const joi = require('joi');

const user = joi.object({
    firstName : joi.string().min(3).max(15).required(),
    lastName : joi.string().min(3).max(15).required(),
    email : joi.string().email({minDomainSegments:2 , tlds : { allow : ['com','net']}}),
    password : joi.string().min(8).max(15),
    mobileNumber : joi.string().min(10).max(10),
    gender : joi.string(),
    salary : joi.string(),
    city : joi.string(),
    state : joi.string(),
    country : joi.string(),
    zipCode : joi.string().min(6).max(6),
    hobby : joi.string(),
    isActive : joi.boolean().default(true),
})

module.exports = user