# Task Management API

## 📌 Overview
This is a simple **Task Management API** built using **Node.js, Express.js, and in-memory storage** (array). It allows users to **create, retrieve, update, and delete tasks.**

## 🚀 Features
- RESTful API structure
- Modular code organization (routes, controllers, models, middlewares)
- Sample tasks included for easy testing
- CORS enabled for cross-origin requests
- Environment variables using `dotenv`
- Error handling middleware

## 📂 Project Structure
```
project/
│── src/
│   ├── controllers/
│   │   ├── taskController.js
│   ├── routes/
│   │   ├── taskRoutes.js
│   ├── middlewares/
│   │   ├── errorHandler.js
│   ├── models/
│   │   ├── taskModel.js
│   ├── server.js
│── .env
│── package.json
│── README.md
```

## 🛠️ Installation & Setup
### 1️⃣ Clone the repository
```sh
git clone <your-repo-url>
cd <your-project-folder>
```
### 2️⃣ Install dependencies
```sh
npm install
```
### 3️⃣ Start the server
```sh
npm start
```
The server runs on `http://localhost:5000` by default.

## 🔗 API Endpoints
### 📌 Get all tasks
```http
GET /api/tasks
```
#### Response:
```json
[
  { "id": 1, "title": "Complete project documentation" },
  { "id": 2, "title": "Review pull requests" }
]
```

### 📌 Create a new task
```http
POST /api/tasks
```
#### Request Body:
```json
{ "title": "New Task" }
```
#### Response:
```json
{ "id": 3, "title": "New Task" }
```

### 📌 Update a task
```http
PUT /api/tasks/:id
```
#### Request Body:
```json
{ "title": "Updated Task Title" }
```
#### Response:
```json
{ "id": 1, "title": "Updated Task Title" }
```

### 📌 Delete a task
```http
DELETE /api/tasks/:id
```
#### Response:
```json
{ "message": "Task deleted" }
```

## 📝 Git Commands
### 1️⃣ Initialize Git (if not already initialized)
```sh
git init
```
### 2️⃣ Add remote repository
```sh
git remote add origin <your-repo-url>
```
### 3️⃣ Commit and push changes
```sh
git add .
git commit -m "Initial commit"
git push -u origin main
```

## 📌 Future Enhancements
- Integrate a real database (MongoDB, PostgreSQL, etc.)
- Implement authentication (JWT, OAuth, etc.)
- Add unit and integration tests
- Deploy to cloud platforms (Heroku, Vercel, AWS, etc.)

---
### 🎯 **Happy Coding!** 🚀