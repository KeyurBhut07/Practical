const mongoose = require('mongoose')
const logger = require('./logger')

mongoose.connect(process.env.MONGO_URI).then(()=>{
    logger.info('Connected to Mongo Database Successfully....!')
}).catch((err)=>{
    loghg.error('Error connecting to Mongoose' + err.message)
})