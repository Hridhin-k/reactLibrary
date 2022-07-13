import axios from './axios'
const getInstances = () => axios.get('/bookinstances', { headers: { Authorization: localStorage.getItem('token') } })
const createInstance = data => axios.post('/bookinstance', data, { headers: { Authorization: localStorage.getItem('token') } })

const deleteInstance = data => axios.delete('/bookinstance', {
  data: {
    data: data
  }
}, { headers: { Authorization: localStorage.getItem('token') } });

const updateInstance = data => axios.put('/bookinstance', data, { headers: { Authorization: localStorage.getItem('token') } })
export { getInstances, createInstance, updateInstance, deleteInstance }