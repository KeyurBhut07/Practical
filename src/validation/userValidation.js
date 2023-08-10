const joi = require('joi');

const user = joi.object({
    name : joi.string().min(3).max(15).required(),
    email : joi.string().email({minDomainSegments:2 , tlds : { allow : ['com','net']}}),
    password : joi.string().min(8).max(15),
    phone : joi.string().min(10).max(10),
    gender : joi.string(),
    position : joi.string(),
    dob : joi.string(),
    city : joi.string(),
    state : joi.string(),
    country : joi.string(),
    zipCode : joi.string().min(6).max(6),
    isActive : joi.boolean().default(true),
    role : joi.string().default('user')
})

module.exports = user