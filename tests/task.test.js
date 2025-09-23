const request = require("supertest");
const app = require("../app");

describe("Tasks API", () => {
    // Get All Task
    it("GET api/tasks should return all tasks", async () => {
        const res = await request(app).get("/api/tasks");
        expect(res.statusCode).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
        expect(res.body.length).toBeGreaterThan(0);
    });

    // Get Task by ID
    it("GET api/tasks/:id should return a task", async () => {
        const res = await request(app).get("/api/tasks/1");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("id", 1);
    });

    it("GET /api/tasks/:id should return 404 if not found", async () => {
        const res = await request(app).get("/api/tasks/999");
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("message", "Task not found");
    });

    // Create Task

    it("POST /api/tasks should create a new task", async () => {
        const newTask = { title: "Test task" };
        const res = await request(app).post("/api/tasks").send(newTask);
        expect(res.statusCode).toBe(201);
        expect(res.body).toHaveProperty("id");
        expect(res.body).toHaveProperty("title", "Test task");
        expect(res.body).toHaveProperty("completed", false);
    });

    // Update Task
    it("PUT /api/tasks/:id should update an existing task", async () => {
        const updateData = { title: "Updated Task", completed: true };
        const res = await request(app).put("/api/tasks/1").send(updateData);
           
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("title", "Updated Task");
        expect(res.body).toHaveProperty("completed", true);
    });

    it("DELETE /api/tasks/:id should delete a task", async () => {
        const res = await request(app).delete("/api/tasks/2");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("message", "Task deleted successfully");
    });

    it("DELETE /api/tasks/:id should return 404 if task not found", async () => {
        const res = await request(app).delete("/api/tasks/999");
        expect(res.statusCode).toBe(404);
        expect(res.body).toHaveProperty("message", "Task not found");
    });


});
