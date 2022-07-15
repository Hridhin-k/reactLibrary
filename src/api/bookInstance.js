import axios from '.'

const getInstances = () => axios.get('/bookinstances',)
const createInstance = data => axios.post('/bookinstance', data,)
const deleteInstance = data => axios.delete(`/bookinstance/${data._id}`);
const updateInstance = data => axios.put('/bookinstance', data,)

export { getInstances, createInstance, updateInstance, deleteInstance }