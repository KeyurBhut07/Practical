const express = require('express');
const router = express.Router()
const validate = require("../../config/validation")
const project = require("../validation/projectValidation")
const projectController = require("../controller/projectControllers")
const {requireSignIn , isAdmin} = require("../auth/requireSignIn")

// create project - Admin
router.post("/create-project", validate(project), requireSignIn, isAdmin, projectController.createProject)

module.exports = router