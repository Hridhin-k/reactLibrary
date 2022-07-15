import axios from '.';

const getBooks = () => axios.get('/books',);
const deleteBook = data => axios.delete(`/book/${data._id}`);
const updateBook = data => axios.put('/book', data,);
const createBook = data => axios.post('/book', data,);

export { getBooks, deleteBook, updateBook, createBook }