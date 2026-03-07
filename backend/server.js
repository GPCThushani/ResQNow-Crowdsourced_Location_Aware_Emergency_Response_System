const User = require('./models/User');
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
app.get("/test-db", async (req, res) => {
  try {
    const allUsers = await User.find(); // This looks for all documents in the 'users' collection
    console.log("Data found in DB:", allUsers);
    res.json(allUsers);
  } catch (err) {
    res.status(500).send("Error reading from database");
  }
});