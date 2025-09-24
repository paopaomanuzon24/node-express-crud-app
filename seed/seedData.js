const fs = require("fs");
const path = require("path");

const tasks = [
    { id: 1, title: "Learn Node.js", completed: false },
    { id: 2, title: "Build an API", completed: false },
    { id: 3, title: "Add Jest testing", completed: true },
];

const filePath = path.join(__dirname, "../data/tasks.json");

fs.writeFileSync(filePath, JSON.stringify(tasks, null, 2));
console.log("Seed data written to tasks.json");