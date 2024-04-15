// Import the books data from the booksData.js file
const books = require('../booksData');


// Define the function to get all books
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// Define the function to create a new book
exports.postBook = (req, res) => {
  // Destructure the required properties from the request body
  const { title, author, genre, publicationYear } = req.body;

  const bookDetails = {
    id: books.length + 1,
    title,
    author,
    genre,
    publicationYear
  };
  // Add the new book to the books array
  books.push(bookDetails);
  // Send a JSON response with the new book data and a status code of 201 (Created)
  res.status(201).json(bookDetails);
};


// Define the function to update an existing book
exports.UpdateBook = (req, res) => {
  // Get the ID of the book to be updated from the request parameters
  const id = parseInt(req.params.id);
  console.log(id);


  // Get the updated data from the request body
  const updatedData = req.body;
  // Map through the books array and update the book with the matching ID
  const data = books.map((book) => {
    if (book.id === id) {
      // Spread the existing book properties and merge them with the updated data
      return { ...book, ...updatedData };
    }
    return book;
  });

  // Send a JSON response with the updated books data and a status code of 201 (Created)
  res.status(201).json(data);
};


// Define the function to delete a book
exports.deleteBook = (req, res) => {
  // Get the ID of the book to be deleted from the request parameters
  const id = req.params.id;
  // Filter the books array to remove the book with the matching ID
  const removedData = books.filter((book) => book.id !== id);
  // Send a JSON response with the updated books data
  res.json(removedData);
};