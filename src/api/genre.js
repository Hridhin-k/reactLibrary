import axios from './axios';
const getGenres = () => axios.get('/genres')
const createGenre = (data) => axios.post('/genre', data)
const updateGenre = (data) => axios.put('/genre', data)
const deleteGenre = (data) => axios.delete('/genre', { data: { data: data } })
export { getGenres, createGenre, updateGenre, deleteGenre }