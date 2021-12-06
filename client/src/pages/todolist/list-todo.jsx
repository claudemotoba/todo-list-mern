import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { useState, useEffect } from 'react'

import { findAllTodos, deleteOneTodo } from '../../api/crudRequest';
import ConfirmDialog from '../../components/confirm-dialog';
import Loader from '../../components/loader';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);

    const getAll = async () => {
        const res = await findAllTodos()
        setTodos(res.response)
    };

    useEffect(()=> {
        getAll();

    }, [])

    const deleteTodo = async (id) => {
        setLoading(true)
        const res = await deleteOneTodo(id);

        getAll()
        setLoading(false)

    }

    return(
        <div className="col-sm-8 mx-auto mt-5">
            {
                loading == true ? <Loader/> : ""
            }
            <div className="text-end">
                <Link className="btn btn-primary" to="/save"> Ajouter </Link>
            </div>
            <table className="table px-5">
                <thead>
                    <tr>
                        <th scope="col">Titre</th>
                        <th scope="col">Description</th>
                        <th scope="col">Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                       todos.map(todo => (
                            <tr key={todo._id}>
                                <td className="align-middle"> { todo.title } </td>
                                <td className="align-middle">{ todo.description } </td>
                                <td className="align-middle">{ todo.createdAt } </td>
                                <td className="align-middle">
                                    <Link to={`/save/${todo._id}`} className="btn btn-primary me-2">
                                        <FiEdit2/>
                                    </Link>
                                    <button onClick={() => deleteTodo(todo._id)} className="btn btn-danger">
                                        <FiTrash2/>
                                    </button>
                                </td>
                            </tr>
                       )) 
                    }
                    
                </tbody>
            </table>
        </div>
    )
}

export default TodoList