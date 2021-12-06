import axios from 'axios'

const url = "http://localhost:4040/api/todos";

export const findAll = () => axios.get(url);
export const findOne = (id) => axios.get(url + `/${id}`);
export const save = (data) => axios.post(url, data);
export const deleteOne = (id) => axios.delete(url + `/${id}`);