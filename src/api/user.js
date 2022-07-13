import axios from './axios'
const createUser = (data) => axios.post('/register', data)
const userLogin = (data) => axios.post('/login', data)
export { createUser, userLogin }