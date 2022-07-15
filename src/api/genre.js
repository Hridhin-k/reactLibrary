import axios from '.';

const getGenres = () => axios.get('/genres')
const createGenre = data => axios.post('/genre', data,)
const updateGenre = data => axios.put('/genre', data,)
const deleteGenre = data => axios.delete(`/genre/${data._id}`)

export { getGenres, createGenre, updateGenre, deleteGenre }