import axios from './axios'
const createAuthor = (data) => axios.post('/author', data);
const getAuthors = () => axios.get('/authors')
const deleteAuthor = data => axios.delete('/bookinstance', {
  data: {
    data: data
  }
});
const updateAuthor = (data) => axios.put('/author', data)
export { getAuthors, createAuthor, deleteAuthor, updateAuthor }