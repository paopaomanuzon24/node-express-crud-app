# 📝 Task API (Node.js + Express)

A simple CRUD API built with **Node.js** and **Express**.  
This project demonstrates clean project structure with controllers, routes, middlewares, logging, validation, data seeding, and testing.

---

## 🚀 Features

- Controller & Route separation
- Error handling middleware
- Input validation with **express-validator**
- Centralized validate middleware
- ESLint + Prettier for clean code style
- Environment variables with `.env`
- Logging with **Winston** + **Morgan**
- Data seeding & JSON-based data storage
- Unit & integration testing using **Jest** + **Supertest**
- Postman collection for API testing

---

## 📂 Project Structure

NODE-EXPRESS/
│── controllers/ # Controllers (business logic)
│── data/ # JSON data (seeded tasks)
│── logs/ # Winston logs
│── middleware/ # Middlewares (error handler, validators)
│── routes/ # API routes
│── seed/ # Seed script
│── tests/ # Jest + Supertest tests
│── utils/ # Utility functions (taskStore, etc.)
│── validators/ # Request validators
│── app.js # Express app config
│── server.js # Server entry point
│── .env # Environment variables
│── .gitignore # Ignored files/folders
│── README.md # Project documentation
