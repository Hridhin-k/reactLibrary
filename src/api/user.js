import axios from './index'
const createUser = (data) => axios.post('/register', data)
const userLogin = (data) => axios.post('/login', data)
export { createUser, userLogin }