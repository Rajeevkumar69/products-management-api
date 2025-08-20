# 🚀 Express + MongoDB API Development Guide

A complete step-by-step professional guide to learn and build REST APIs using Node.js, Express.js, and MongoDB. This repository serves as both a ready-to-run codebase and a comprehensive documentation manual for backend developers.

---

## Core Concepts & Why They Matter

### 🔹 **Node.js**
- Runs JavaScript on the server
- Provides non-blocking I/O → handles many requests simultaneously

### 🔹 **Express.js**
- Framework to handle API requests (GET, POST, PUT, DELETE)
- Provides middleware system for logging, authentication, validation

### 🔹 **MongoDB**
- NoSQL document-based database
- Stores flexible JSON-like documents

### 🔹 **Mongoose (ODM)**
- Provides schema structure for MongoDB
- Prevents inconsistent data
- Offers built-in validators and query helpers

---

## Project Structure & Why It Matters

A clean folder structure makes APIs scalable, testable, and readable:

```
project-root/
│── index.js           # Main entry point
│── .env               # Environment variables
│── package.json       # Dependencies
│── /models            # MongoDB schemas
│── /controllers       # Business logic
│── /routes            # Route definitions
│── /schma             # Code organization
```

---

## Understanding Each Layer

### 🔹 **Model (Schema)**
- Defines the shape of data stored in MongoDB
- **Why?** → Prevents junk data, enforces consistency
- **Example:** Product schema with name, description and price

### 🔹 **Controller**
- Handles business logic for each route
- **Why?** → Keeps code clean & reusable
- **Example:** createProduct() function for product

### 🔹 **Router**
- Defines endpoints (URLs) and maps them to controllers
- **Why?** → Keeps index.js clean and modular
- **Example:** router.post("/createProduct", createProduct)

### 🔹 **Server (Entry Point)**
- Bootstraps the app: loads middlewares, connects DB, starts Express server

---

## Packages & Their Purpose

| Package | Why Use It |
|---------|------------|
| express | Framework to handle HTTP requests |
| mongoose | ODM for MongoDB, manages schemas |
| dotenv | Stores secrets like DB connection & PORT |
| nodemon | Restarts server automatically in development |
| cors | Allows cross-origin API requests |

---

## Setup & Installation

### Clone Repository
```bash
`git clone https://github.com/Rajeevkumar69/products-management-api`
cd project-folder
```

### Install Dependencies
```bash
npm install
```

### Environment Setup
Create a `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/myDB
```

### Run Project
```bash
nodemon index.js 4800
```

---

## Import Styles

There are two ways to import packages in Node.js:

### 🔹 CommonJS (default in Node.js)
```javascript
const express = require("express");
```

### 🔹 ES Module (modern way)
Add `"type": "module"` in package.json and use:
```javascript
import express from "express";
```

👉 This repo follows ES Module (import) style for clean code.

---

## API Development Workflow

### 🔹 Step 1: Define Schema (Model)
**Why?** → To enforce data consistency
```javascript
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, unique: true },
  price: { type: String, required: true }
});

export default mongoose.model("product", productSchema);
```

### 🔹 Step 2: Create Controller
**Why?** → To separate business logic from route definitions
```javascript
export const createProduct = async (req, res) => {
  try {
    const newproduct = await product.create(req.body);
    res.status(201).json(newproduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
```

### 🔹 Step 3: Setup Routes
**Why?** → Routes handle endpoints and link to controllers
```javascript
import express from "express";
import { createProduct } from "../controllers/productController.js";

const router = express.Router();
router.post("/createProduct", createProduct);

export default router;
```

### 🔹 Step 4: Connect Everything in index.js
```javascript
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api/products", productRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => app.listen(process.env.PORT, () => 
    console.log("Server running...")))
  .catch(err => console.error(err));
```

---

## Debugging the Right Way

- **Console Logs** → Quick check for request body & DB responses
- **nodemon** → Restarts server automatically on save
- **Postman / Thunder Client** → Test APIs easily
- **MongoDB Compass** → GUI to check stored documents
- **Error Handling Middleware** → Catch all errors in one place

---

## 🧠 Learning Outcomes

By following this repo you will:
- ✔ Understand why models, controllers, routers are separate
- ✔ Know how to import & structure code properly
- ✔ Build REST APIs with Express + MongoDB
- ✔ Debug issues in a professional workflow
- ✔ Write scalable, modular backend code

---

## ✅ Conclusion

This README is your complete roadmap to backend development with Express & MongoDB:
- Why each part exists (Schema, Controller, Router)
- How to import, structure, and debug
- How to build APIs in an organized, professional way

---

**Happy Coding!** 🎯
