import axios from 'axios'

const url = "http://localhost:4040/api/todos";

export const findAll = (query) => axios.get(url + query);
export const findOne = (id) => axios.get(url + `/${id}`);
export const save = (data) => axios.post(url, data);
export const update = (id, data) => axios.put(url +`/${id}`, data);
export const deleteOne = (id) => axios.delete(url + `/${id}`);