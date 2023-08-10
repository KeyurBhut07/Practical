const logger = require("../../config/logger")
const projectModel = require("../model/projectModel")
const message = require("../../helper/message")

exports.createProject = async (req,res) => {
    try {
        const { name, code , description , cretaeBy , updateBy  } = req.body
        const project = await projectModel({
            name,
            code,
            description,
            cretaeBy : req.user.name,
            updateBy : req.user.name,
        }).save()
        res.message = req.t('projectCreate');
        message.success(project,res)
    } catch (error) {
        logger.error("Error creating project', " + error.message)
    }
}