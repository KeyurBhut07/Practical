require('dotenv').config();
require("./config/db")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 2055
const logger = require("./config/logger")

// middleware
app.use(express.json())

//route
app.use('/', require('./src/routes/userRoute'))

// server
app.listen(PORT , ()=>{
    logger.info(`Server Is Running http://localhost:${PORT}`)
})