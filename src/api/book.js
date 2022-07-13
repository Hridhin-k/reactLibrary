import axios from './axios';

const getBooks = () => axios.get('/books', { headers: { Authorization: localStorage.getItem('token') } });
const deleteBook = data => axios.delete('/book', { data: { data: data } }, { headers: { Authorization: localStorage.getItem('token') } });
const updateBook = data => axios.put('/book', data, { headers: { Authorization: localStorage.getItem('token') } });
const createBook = data => axios.post('/book', data, { headers: { Authorization: localStorage.getItem('token') } });

export { getBooks, deleteBook, updateBook, createBook }