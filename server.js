const express = require("express");
const app = express();
const PORT = 8000;


app.use(express.json());

let tasks = [
    {id : 1, title: "Learn Node.js", completed: false},
    {id : 2, title: "build an API", completed: false}
];


app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}`);
});