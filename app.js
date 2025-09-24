const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");
const morgan = require("morgan");
const logger = require("./logger");

const app = express();
app.use(express.json());

// Morgan for HTTP request logs
app.use(
    morgan("tiny", {
        stream: {
            write: (message) => logger.http(message.trim()),
        },
    })
)


app.use("/api", taskRoutes);

//Error Handler
app.use(errorHandler);

module.exports = app;