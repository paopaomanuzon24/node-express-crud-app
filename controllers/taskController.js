const logger = require("../logger");
const { loadTasks, saveTasks } = require("../utils/taskStore");

const tasks = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "build an API", completed: false },
];

//Get Tasks
const getTasks = (req, res) => {
    const tasks = loadTasks();
    logger.info("Fetching all tasks");
    res.status(200).json(tasks);
};

//Get Task by ID
const getTask = (req, res, next) => {
    const tasks = loadTasks();
    const task = tasks.find((item) => item.id === parseInt(req.params.id));

    if (!task) {
        logger.warn(`Task with ID ${req.params.id} not found`);
        const error = new Error("Task not found");
        error.status = 404;
        next(error);
        return;
    }

    logger.info(`Fetch task with ID ${task.id}`);
    res.status(200).json(task);
};

//Create Task
const createTask = (req, res) => {
    const tasks = loadTasks();
    const { title, completed } = req.body;

    const newTask = {
        id: tasks.length + 1,
        title,
        completed: completed || false,
    }; 

    tasks.push(newTask);
    saveTasks(tasks);
    logger.info(`Created new task with ID ${newTask.id}: "${newTask.title}"`);
    res.status(201).json(newTask);
};

//Update Task
const updateTask = (req, res, next) => {
    const tasks = loadTasks();
    const task = tasks.find((item) => item.id === parseInt(req.params.id));
    if (!task) {
         logger.warn(`Failed to update - Task with ID ${req.params.id} not found`);
        const error = new Error("Task not found");
        error.status = 404;
        next(error);
        return;
    }

    const { title, completed } = req.body;
    if (title !== undefined) {
        task.title = title;
    }
    if (completed !== undefined) {
        task.completed = completed;
    }
    saveTasks(tasks);

    logger.info(`Updated task with ID ${task.id}`);
    res.status(200).json(task);
};

//Delete Task
const deleteTask = (req, res, next) => {
    let tasks = loadTasks();
    const id = parseInt(req.params.id);
    const index = tasks.findIndex((item) => item.id === id);
    
    if (index === -1) {
        logger.warn(`Failed to delete - Task with ID ${id} not found`);
        const error = new Error("Task not found");
        error.status = 404;
        next(error);
        return;
    }

    tasks.splice(index, 1);
    saveTasks(tasks);
    logger.info(`Deleted task with ID ${id}`);
    res.status(200).json({ message: "Task deleted successfully" });
};

module.exports = {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask,
};
