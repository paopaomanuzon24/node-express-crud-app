const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(express.json());

app.use("/api", taskRoutes);

//Error Handler
app.use(errorHandler);

module.exports = app;