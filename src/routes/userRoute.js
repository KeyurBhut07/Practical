const express = require('express');
const usercontroller = require('../controller/userControllers')
const validate = require("../../config/validation")
const user = require('../validation/userValidation')
const router = express.Router()


router.post("/create-user" , validate(user) ,usercontroller.createUser)

router.post("/login" , usercontroller.login)



module.exports = router