const express = require("express");
const app = express();
const taskRoutes = require('./routes/taskRoutes');
const errorHandler = require('./middleware/errorHandler');
const PORT = 8000;


app.use(express.json());

app.use('/api',taskRoutes);

//Error Handler
app.use(errorHandler);



app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});