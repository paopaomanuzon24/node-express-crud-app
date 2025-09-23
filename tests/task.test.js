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


    
    it("GET api/tasks/:id should return a task", async () => {
        const res = await request(app).get("/api/tasks/1");
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty("id", 1);
    });

    it("GET /api/tasks/:id -> should return 404 if not found", async () =>{
        const res = await request(app).get("/api/tasks/999");
        expect(res.statusCode).toBe(404);
    })


});









