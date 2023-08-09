const express = require('express');
const usercontroller = require('../controller/userControllers')
const validate = require("../../config/validation")
const user = require('../validation/userValidation')
const router = express.Router()


router.post("/register" , validate(user) ,usercontroller.rigister)


module.exports = router