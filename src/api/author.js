import axios from './axios'
const createAuthor = (data) => axios.post('/author', data, { headers: { Authorization: localStorage.getItem('token') } });
const getAuthors = () => axios.get('/authors', { headers: { Authorization: localStorage.getItem('token') } })
const deleteAuthor = data => axios.delete('/author', {
  data: {
    data: data
  }
}, { headers: { Authorization: localStorage.getItem('token') } });
const updateAuthor = (data) => axios.put('/author', data, { headers: { Authorization: localStorage.getItem('token') } })
export { getAuthors, createAuthor, deleteAuthor, updateAuthor }