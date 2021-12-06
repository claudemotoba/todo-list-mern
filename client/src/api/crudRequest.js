import * as api from './baseUrl';
import AppConst from '../utilities/app-const';

export const findAllTodos = async() => {
    try {
        const { data } = await api.findAll();
        return data;

    } catch (error) {
        return AppConst.unkwon_error;
        
    }
}

export const findOneTodos = async(id) => {
    try {
        const { data } = await api.findOne(id);
        return data;

    } catch (error) {
        return AppConst.unkwon_error;
        
    }
}

export const deleteOneTodo = async(id) => {
    try {
        const { data } = await api.deleteOne(id);
        return data;

    } catch (error) {
        return AppConst.unkwon_error;
        
    }
}

export const saveTodo = async (data) => {
    try {

        const res = await api.save(data);
        return res.data;

    } catch (error) {
        return AppConst.unkwon_error;
        
    }
}