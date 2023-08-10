require('dotenv').config();
require("./config/db")
const express = require("express")
const app = express()
const PORT = process.env.PORT || 2055
const logger = require("./config/logger")
const i18n = require("i18next");
const backend = require("i18next-fs-backend");
const middleware = require("i18next-http-middleware");
const message = require("./helper/message")

// middleware
app.use(express.json())

// Localization configuration
i18n
    .use(backend)
    .use(middleware.LanguageDetector)
    .init({
        fallbackLng : "eng",
        backend : {
            loadPath: "./localiz/{{lng}}/translate.json",
        }
    })
app.use(middleware.handle(i18n));


//route - 
app.use('/user', require('./src/routes/userRoute'))
app.use('/project' , require("./src/routes/projectRoute"))


app.use("*" ,(req,res) =>{
    res.message = req.t('pageNotFound');
    message.badRequest(res);
})

// server
app.listen(PORT , ()=>{
    logger.info(`Server Is Running http://localhost:${PORT}`)
})