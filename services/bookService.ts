import Book from '../models/book';

/**
 * 
 * @returns an array of all books sorted by title
 */
async function getAllBooks() {
  return Book.find({}, 'title author').sort({ title: 1 }).populate('author genre');
}

/**
 * 
 * @param bookData the book data to be saved.
 * @returns the book object that has been saved.
 */
async function createBook(bookData: any) {
  return new Book(bookData).save();
}


export default {
    getAllBooks,
    createBook
};
