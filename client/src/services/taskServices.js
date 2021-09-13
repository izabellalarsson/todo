import axios from 'axios';

const apiUrl = 'http://localhost:8000/tasks';

const getTasks = () => axios.get(apiUrl);

const addTask = (task) => axios.post(apiUrl, task);

const updateTask = (id, task) => axios.put(`${apiUrl}/${id}`, task);

const deleteTask = (id) => axios.delete(`${apiUrl}/${id}`);

export { getTasks, addTask, updateTask, deleteTask };
