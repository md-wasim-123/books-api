// Import the required modules
const express = require('express');
require("dotenv").config(); // Load environment variables from .env file

// Create an Express application instance
const app = express();

// Import the routes file
const router = require('./router/routes');

// Get the port number from the environment variable or use a default port
const port = process.env.PORT || 3000;

// Use the built-in JSON middleware to parse incoming JSON data
app.use(express.json());

// Use the imported routes in the application
app.use('/', router);

// Start the server and listen for incoming requests
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});