//const express = require("express");
import express from "express"
//const dotenv = require("dotenv");
import dotenv from "dotenv"
//const cors = require("cors");
import cors from "cors"
//const bodyParser = require("body-parser");
import bodyParser from "body-parser";
//const connectDB = require("./config/db");
import connectDB from "./config/db.js"
import router from "./routes/authRoutes.js";
import routerMood from "./routes/moodRoutes.js";
// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/auth", router);
app.use("/mood",routerMood)

app.get("/", (req, res) => {
  res.send("Mood Tracker API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
