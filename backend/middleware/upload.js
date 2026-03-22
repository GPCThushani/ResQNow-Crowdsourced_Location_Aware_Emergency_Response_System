const multer = require("multer");

// store file in memory (simple for testing)
const storage = multer.memoryStorage();

const upload = multer({ storage });

module.exports = upload;