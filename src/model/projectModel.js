const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    name : String,
    code : String,
    description : String,
    cretaeBy : String,
    updateBy : String
},{
    timestamps : true,
})

const projectModel = mongoose.model('Project', projectSchema);

module.exports = projectModel;