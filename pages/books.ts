import Book from '../models/book';
import Author from '../models/author';
import express from 'express';
import bookService from '../services/bookService';

const router = express.Router();


/**
 * @route GET /books
 * @group Book
 * @returns an array of all books sorted by title
 * @returns an error message if no books were found 
 * or if there was an error processing the request
 */
router.get('/', async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.send('No books found');
  }
});

export default router;
