const joi = require("joi")

const project = joi.object({
    name : joi.string().min(3).max(15).required(),
    code : joi.string().required(),
    description : joi.string().required(),
    cretaeBy : joi.string(),
    updateBy : joi.string()
})

module.exports = project