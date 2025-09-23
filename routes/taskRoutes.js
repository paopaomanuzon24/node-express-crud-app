const express = require("express");
const router = express.Router();

const {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const {
  createTaskValidator,
  updateTaskValidator,
  taskIdValidator,
} = require("../validators/taskValidator");

const validate = require("../middleware/validate");

router.get("/tasks", getTasks); // Get All tasks
router.get("/tasks/:id", getTask); // Get Task by Id tasks
router.post("/tasks", createTaskValidator, validate, createTask); //Create Task
router.put("/tasks/:id", updateTaskValidator, validate, updateTask); // Update Task
router.delete("/tasks/:id", taskIdValidator, validate, deleteTask); // Delete Task

module.exports = router;
