import express from 'express';
import instanceService from '../services/instanceService';

const router = express.Router();

/**
 * @route GET /available
 * @returns {object} 200 - An array of available books
 * @returns {Error}  500 - if an error occurs when fetching the books
 */
router.get('/', async (req, res) => {
  try {
    const availableBooks = await instanceService.getAvailableBooks();
    res.json(availableBooks);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
});

export default router;
