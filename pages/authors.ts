import { Response } from 'express';
import Author from '../models/author';
import express from 'express';
import authorService from '../services/authorService';
const router = express.Router();

/**
 * @route GET /authors
 * @group Author
 * @returns an array of all authors sorted by family_name
 * @returns an error message if no authors were found 
 * or if there was an error processing the request
 */
router.get('/', async (req, res) => {
  try {
    const authors = await authorService.getAllAuthors();
    res.json(authors);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
