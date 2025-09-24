const { createLogger, format, transports } = require("winston");

const logger = createLogger({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
    format: format.combine(
        format.timestamp({ fromat: "YYYY-MM-DD HH:mm:ss" }),
        format.errors( {stack:true} ),
        format.json()
       /*  format.printf(
            ({ timestamp, level, message }) => `[${timestamp}] ${level.toUpperCase()}: ${message}`
        ) */
    ),
    /* transports: [
        new transports.Console(),
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combined.log" }),
    ], */
    transports: [
        new transports.Console({
            format: format.combine(
                format.colorize(),
                format.printf(({level, message, timestamp, stack}) =>{
                    return stack   
                        ? `[${timestamp}] ${level}: ${message}\n${stack}`
                        : `[${timestamp}] ${level}: ${message}`;
                })
            ),
        }),
        new transports.File({ filename: "logs/error.log", level: "error" }),
        new transports.File({ filename: "logs/combined.log"}),
    ],
});

module.exports = logger;

