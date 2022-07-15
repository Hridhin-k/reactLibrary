import axios from '.'
const getAuthors = () => axios.get('/authors',)
const createAuthor = data => axios.post('/author', data,);
const deleteAuthor = data => axios.delete(`/author/${data._id}`);
const updateAuthor = data => axios.put('/author', data,)

export { getAuthors, createAuthor, deleteAuthor, updateAuthor }