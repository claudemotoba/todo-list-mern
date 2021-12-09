import { Link, useParams } from 'react-router-dom';
import { FiTrash2, FiEdit2 } from 'react-icons/fi';
import { useState, useEffect } from 'react'

import { findAllTodos, deleteOneTodo } from '../../api/crudRequest';
import Loader from '../../components/loader';

const TodoList = () => {

    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const { status } = useParams();

    const getAll = async () => {
        const res = await findAllTodos("")
        setTodos(res.response)
    };

    const getTaskByCategory = async () => {
        
        const char = status.replace("-", " ").toUpperCase()
        const res = await findAllTodos(`/status/${char}`)
        setTodos(res.response)
        
    }

    useEffect(()=> {
        setLoading(true)
        
        if (status) getTaskByCategory()
        else getAll();
        
        setLoading(false)
    }, [todos])

    const deleteTodo = async (id) => {
        setLoading(true)

        await deleteOneTodo(id);

        getAll()
        setLoading(false)

    }

    return(
        <div className="col-sm-8 ms-5">
            {
                loading == true ? <Loader/> : ""
            }
            <div className="d-flex justify-content-between">
                <h2 className="mb-0">Task Manager</h2>
                <div className="text-end">
                    <Link className="btn btn-primary" to="/save"> Ajouter </Link>
                </div>
            </div>
            
            {
                todos?.map(todo => (
                    <div key={todo._id} className="card mt-3">

                        <h5 className="card-header">

                            { todo.status == 'IN PROGRESS' ? <span className="badge bg-primary">{ todo.status }</span> : "" }

                            { todo.status == 'OPEN' ? <span className="badge bg-secondary">{ todo.status }</span> : "" }
                            
                            { todo.status == 'COMPLETED' ? <span className="badge bg-success">{ todo.status }</span> : "" }

                            { todo.status == 'PENDING' ? <span className="badge bg-warning">{ todo.status }</span> : "" }

                            { todo.status == 'CLOSE' ? <span className="badge bg-dark">{ todo.status }</span> : "" }

                        </h5>
                        <div className="card-body">
                            <h5 className="card-title">{ todo.title }</h5>
                            <p className="card-text">
                                { todo.description }
                            </p>
                            <p>
                                { todo.createdAt }
                            </p>

                            <div>
                                <Link to={`/save/${todo._id}`} className="btn btn-primary me-2">
                                    <FiEdit2/> Modifier
                                    
                                </Link>
                                <button onClick={() => deleteTodo(todo._id)} className="btn btn-danger">
                                    <FiTrash2/> Supprimer
                                </button>
                            </div>
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}

export default TodoList