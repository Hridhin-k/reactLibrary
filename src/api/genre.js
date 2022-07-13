import axios from './axios';
const getGenres = () => axios.get('/genres', { headers: { Authorization: localStorage.getItem('token') } })
const createGenre = (data) => axios.post('/genre', data, { headers: { Authorization: localStorage.getItem('token') } })
const updateGenre = (data) => axios.put('/genre', data, { headers: { Authorization: localStorage.getItem('token') } })
const deleteGenre = (data) => axios.delete('/genre', { data: { data: data } }, { headers: { Authorization: localStorage.getItem('token') } })
export { getGenres, createGenre, updateGenre, deleteGenre }