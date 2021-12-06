import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { useState, useEffect } from 'react'

import { findAllTodos } from '../../api/crudRequest';

const TodoList = () => {

    const [todos, setTodos] = useState([])

    useEffect(()=> {

        const getAll = async () => await findAllTodos();
        
        setTodos(getAll)

        console.log(getAll);
    }, [])

    return(
        <div className="col-sm-8 mx-auto mt-5">
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
                    <tr>
                        <td className="align-middle">Mark</td>
                        <td className="align-middle">Otto</td>
                        <td className="align-middle">@mdo</td>
                        <td className="align-middle">
                            <Link to={`/save/${1}`} className="btn btn-primary me-2">
                                <FiEdit2/>
                            </Link>
                            <button className="btn btn-danger">
                                <FiTrash2/>
                            </button>
                        </td>
                    </tr>
                    <tr>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TodoList