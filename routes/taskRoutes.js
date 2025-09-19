const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");

router.get('/tasks', taskController.getTasks); // Get All tasks
router.get('/tasks/:id', taskController.getTask); // Get Task by Id tasks
router.post('/tasks', taskController.createTask); //Create Task
router.put('/tasks/:id', taskController.updateTask); // Update Task
router.delete('/tasks/:id',taskController.deleteTask); // Delete Task

module.exports = router;