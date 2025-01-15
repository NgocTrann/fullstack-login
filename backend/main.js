const express = require("express");
const cors = require("cors");
const app = express();

// middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// GET endpoints

// POST endpoints

const PORT = 5000;
app.listen(PORT, () => {console.log("Backend Server Running at http://localhost:5000")})