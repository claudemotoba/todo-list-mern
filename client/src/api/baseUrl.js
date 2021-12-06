import axios from 'axios'

const url = "http://localhost:4040/api/todos";

export const findAll = () => axios.get(url);
export const save = (data) => axios.post(url, data);