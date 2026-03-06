require('dotenv').config();
const express = require("express");
const connectDB = require('./db'); // Import the DB connection function

const app = express();

// Connect to MongoDB
connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("ResQNow backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});