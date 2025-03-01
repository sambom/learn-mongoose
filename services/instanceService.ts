import BookInstance from '../models/bookinstance';

/**
 * 
 * @returns an array of available books
 */
async function getAvailableBooks() {
    return BookInstance.find({ status: 'Available' }).populate('book');
}


export default {
    getAvailableBooks
};
