import axios from './axios'
const getInstances = () => axios.get('/instances')
const createInstance = data => axios.post('/instance', data)
const deleteInstance = data => axios.delete('/instance', data)
const updateInstance = data => axios.put('/instance', data)
export { getInstances, createInstance, updateInstance, deleteInstance }