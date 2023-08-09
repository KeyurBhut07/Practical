const winston = require('winston')

const myFormat = winston.format.combine(
    winston.format.colorize({
        all: true,
        colors : {
            debug: 'blue',
            info : 'green',
            error : 'red',
            warn : 'yellow',
        }
    }),
    winston.format.timestamp({format : 'DD-MM-YYYY HH:mm:ss'}),
    winston.format.printf(({timestamp , level, message})=>{
        return `[${timestamp}] [${level}] ${message}`
    })
)

const logger = winston.createLogger({
    transports : [
        new winston.transports.Console({
            level : "info",
            format : myFormat
        }),
        new winston.transports.Console({
            level : "warn",
            format : myFormat
        }),
        new winston.transports.Console({
            level : "error",
            format : myFormat
        })
    ]
})

module.exports = logger