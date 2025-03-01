import Author from "../models/author";

/**
 * 
 * @returns an array of all authors sorted by family_name
 */
async function getAllAuthors() {
    return Author.find().sort({ family_name: 1 });
}


export default {
    getAllAuthors
};
