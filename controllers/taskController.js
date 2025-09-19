const {body, validationResult} = require("express-validator");
 
let tasks = [
    {id : 1, title: "Learn Node.js", completed: false},
    {id : 2, title: "build an API", completed: false}
];


//Get Tasks
const getTasks = (req, res) => {
    res.status(200).json(tasks);
}


//Get Task by ID
const getTask = (req, res, next) => {
    const task = tasks.find(item => item.id === parseInt(req.params.id));

    if(!task){
        const error = new Error("Task not found");
        error.status = 404;
        return next(error);
    }
    res.status(200).json(task);
}

//Create Task
const createTask = (req, res, next) => {
    
   
    const { title } = req.body;
    if(!title){
        const error = new Error("Title is required");
        error.status = 400;
        return next(error);
    } 

    const newTask = {
        id: tasks.length + 1,
        title,
        completed:false 
    }
    tasks.push(newTask);
    res.status(201).json(newTask);
}

//Update Task
const updateTask = (req, res, next) => {
    const task = tasks.find(item => item.id === parseInt(req.params.id));
    if(!task){
        const error = new Error("Task not found");
        error.status = 404;
        return next(error);
    }

    const {title, completed} = req.body;
    if(title !== undefined){
        task.title = title;
    }

    if(completed !== undefined){
        task.completed = completed;
    }

    res.status(200).json(task);
}

//Delete Task
const deleteTask = (req, res, next) => {
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((item) => item.id === id);
    if(index === -1){
        const error = new Error("Task not found");
        error.status = 404;
        return next(error);
    }

    tasks.splice(index, 1);
    res.status(200).json({message: "Task deleted succeesfully"});
}


module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}