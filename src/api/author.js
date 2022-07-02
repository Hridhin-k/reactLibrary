import axios from './axios'
const createAuthor = (data) => axios.post('/author', data);
const getAuthors = () => axios.get('/authors')
const deleteAuthor = (data) => axios.delete('/author', data);
const updateAuthor = (data) => axios.put('/author', data)
export { getAuthors, createAuthor, deleteAuthor, updateAuthor }