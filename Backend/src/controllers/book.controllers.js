const Logger = require('F:/CredenceAnalytics/NodeJS_Assignment/CRUDapp/services/logger_service')
const express = require('express')
const app = express()
const Book = require('../models/book.model.js');
const logger = new Logger('app')
app.use(express.urlencoded({
  extended: false
}))
 


// Retrieve and return all Books from the database.
exports.findAll = async (req, res) => {
  try {
    logger.info("REQUEST: GET request for all IDs - " + process.env.EndpointURL + '/')
    const books = await Book.find()
    res.json(books)
    logger.info("RESPONSE: Please find below records " + books)
  } catch (err) {
    res.status(500).send("RESPONSE : Something went wrong while getting list of books." || err.message)
    logger.error("RESPONSE : Something went wrong while getting list of books." || err.message)
  }
};


// Create and Save a new Book
exports.create = async (req, res) => {
  try {
    logger.info("REQUEST: POST request for ID : " + req.body._id + " - " + process.env.EndpointURL + '/')

    // Validate request
    if (!req.body) {
      res.status(400).send("Please fill all required field")
      logger.error("Please fill all required field")
    }

    // Create a new Book
    const book = new Book({
      _id: req.body._id,
      name: req.body.name,
      img: req.body.img,
      summary: req.body.summary
    });
    
    // Save book in the database
    const newBook = await book.save();
    res.status(201).json({ newBook });
    logger.info("RESPONSE: Posted record with ID : " + book._id + " | Name : " + book.name + " | Image : " + book.img + " | Summary : " + book.summary)
  } catch (err) {
    
    logger.error("RESPONSE : Book already present with the same ID")
    return res.status(400).send("RESPONSE : Book already present with the same ID");
  }
};


// Find a single Book with a id
exports.findOne = async (req, res) => {
  try {
    logger.info("REQUEST : GET Request recieved for ID : " + req.params._id + " - " + process.env.EndpointURL + '/' + req.params._id)

    const book = await Book.findById(req.params._id);

    if (!book) {
      logger.error("RESPONSE : Book not found with id : " + req.params._id);
      return res.status(404).send("RESPONSE : Book not found with id : " + req.params._id)
    }
    res.json(book)
    logger.info("RESPONSE : Found Book with id : " + req.params._id + " - " + book);
  }
  catch (err) {
    if (err.kind === 'ObjectId') {
      return res.status(404).send(logger.error("RESPONSE : Book not found with id : " + req.params._id + "  -- Message: " + err.message));
    }
    return res.status(500).send(
      logger.error("RESPONSE : Error getting book with id " + req.params._id + "  -- Message: " + err.message))

  }

}


// Update a Book identified by the id in the request
exports.update = async (req, res) => {

  try {
    logger.info("REQUEST : PUT request for ID : " + req.params._id + " - " + process.env.EndpointURL + '/' + req.params._id);
    // Validate Request
    if (!req.body) {
      return res.status(400).send(logger.error("Please fill all required field"));
    }logger.info("91")
    // Find book and update it with the request body
    let book = await Book.findByIdAndUpdate(req.params._id, {
      name: req.body.name,
      img: req.body.img,
      summary: req.body.summary
    }, { new: true })
    logger.info("99")
    if (!book) {
      logger.error("RESPONSE : Book not found with id : " + req.params._id)
      return res.status(404).send("RESPONSE : Book not found with id : " + req.params._id);
    }logger.info("103")
    res.send(book);
    logger.info("RESPONSE : Record updated for ID : " + req.params._id + " | Updated Values - ID : " + book._id + " | Name : " + book.name + " | Image : " + book.img + " | Summary : " + book.summary);
  }
  catch (err) {
    if (err.kind === 'ObjectId') {
      logger.error("RESPONSE : Book not found with id : " + req.params._id)
      return err.status(404).send("RESPONSE : Book not found with id : " + req.params._id);
    }logger.info("111")

    logger.error("RESPONSE : Something went wrong while updating ID : " + req.params._id)
    logger.error("err:"+ err)
    return err.status(500).send("RESPONSE : Something went wrong while updating ID : " + req.params._id);


  }
};

// Delete a Book with the specified id in the request
exports.delete = async (req, res) => {
  try {
    logger.info("REQUEST : DELETE request for ID : " + req.params._id + " - " + process.env.EndpointURL + '/' + req.params._id);
    let book = await Book.findByIdAndRemove(req.params._id)

    if (!book) {
      logger.error("RESPONSE : Book not found with id : " + req.params._id)
      return res.status(404).send("RESPONSE : Book not found with id : " + req.params._id);
    }
    logger.info("RESPONSE : Book Deleted successfully with ID : " + req.params._id)
    res.send("RESPONSE : Book Deleted successfully with ID : " + req.params._id);
  }
  catch (err) {
    if (err.kind === 'ObjectId' || err.name === 'NotFound') {
      logger.error("RESPONSE : Could not delete book with ID : " + req.params._id)
      return err.status(500).send(logger.error("RESPONSE : Could not delete book with ID " + req.params._id));
    }

  }
};
