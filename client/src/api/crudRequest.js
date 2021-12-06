import * as api from './baseUrl';
import AppConst from '../utilities/app-const';

export const findAllTodos = async() => {
    try {
        const { data } = await api.findAll();
        return data;

    } catch (error) {
        console.log(error);
        return AppConst.unkwon_error;
        
    }
}

export const saveTodo = async (data) => {
    try {

        const res = await api.save(data);
        return res;

    } catch (error) {
        console.log(error);
        return AppConst.unkwon_error;
        
    }
}