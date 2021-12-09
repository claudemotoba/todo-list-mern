import * as api from './baseUrl';
import AppConst from '../utilities/app-const';

export const findAllTodos = async(status) => {
    try {
        const { data } = await api.findAll(status);
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

export const updateTodo = async (id, data) => {
    try {

        const res = await api.update(id, data);
        return res.data;

    } catch (error) {
        return AppConst.unkwon_error;
        
    }
}