// Import the Express.js library
const express = require('express');

// Create a new instance of the Express router
const router = express.Router();

// Import the CRUD controller functions
const book = require('../controller/curdController');

// Define the route for retrieving all books
router.get("/allbooks", book.getAllBooks);

// Define the route for post a new book
router.post("/postbook", book.postBook);

// Define the route for updating an existing book
router.put("/updatebook/:id", book.UpdateBook);

// Define the route for deleting a book
router.delete("/detelebook/:id", book.deleteBook);

// Export the router so that it can be used in other parts of the application
module.exports = router;