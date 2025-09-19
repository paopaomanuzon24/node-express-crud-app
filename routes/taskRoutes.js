const express = require("express");
const router = express.Router();
const {
    getTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
} = require("../controllers/taskController");

router.get('/tasks', getTasks); // Get All tasks
router.get('/tasks/:id', getTask); // Get Task by Id tasks
router.post('/tasks', createTask); //Create Task
router.put('/tasks/:id', updateTask); // Update Task
router.delete('/tasks/:id',deleteTask); // Delete Task

module.exports = router;