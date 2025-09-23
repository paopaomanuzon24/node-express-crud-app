const { body, param } = require("express-validator");

const createTaskValidator = [
  body("title")
    .trim()
    .notEmpty()
    .withMessage("Title is required")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false"),
];

const updateTaskValidator = [
  body("title")
    .optional()
    .trim()
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters"),
  body("completed")
    .optional()
    .isBoolean()
    .withMessage("Completed must be true or false"),
];

const taskIdValidator = [
  param("id").isInt({ gt: 0 }).withMessage("ID must be a positive integer"),
];

module.exports = {
  createTaskValidator,
  updateTaskValidator,
  taskIdValidator,
};
