import { Link, useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useState, useEffect } from 'react';

import { saveTodo, findOneTodos, updateTodo } from '../../api/crudRequest';
import Loader from '../../components/loader';

const CreateTodo = () => {

    const navigate = useNavigate();
    const { id } = useParams();
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const [todo, setTodo] = useState([])
    const { register, handleSubmit } = useForm();

    const onSubmit = async (data) => {
        
        if (id) {

            setLoading(true)
            const save = await updateTodo(id, data);
    
            if(typeof save == 'string') setMessage(save);
    
            if(save.status == 200) return navigate("/");;
    
            setLoading(false)

        }else{

            setLoading(true)
            data.status = "OPEN";
            const save = await saveTodo(data);
    
            if(typeof save == 'string') setMessage(save);
    
            if(save.status == 200) return navigate("/");;
    
            setLoading(false)
        }
        
    };

    const getAll = async () => {
        const res = await findOneTodos(id)
        setTodo(res.response)
    };

    useEffect(()=> {
        
        if (id) getAll();
        
    }, [])

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="col-sm-6 mx-auto mt-5">
            <div className="mb-3">
                <label htmlFor="" className="form-label">Titre <span className="text-danger">*</span> </label>
                <input 
                    type="text" 
                    defaultValue={todo?.title}
                    {...register("title", { required: true })} className="form-control" 
                    id="title" 
                    placeholder="Lire"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Description</label>
                <textarea 
                    {...register("description", { maxLength: 200 })}          className="form-control"  
                    defaultValue={todo?.description}
                    id="description" 
                    placeholder="Description"
                    rows="3"></textarea>
            </div>
            {
                id ? (
                    <div className="mb-3">
                        <label htmlFor="" className="form-label">Statut <span className="text-danger">*</span> </label>
                        <select 
                            className="form-control"  
                            value={todo?.status}
                            {...register("status", { required: true })} 
                            name="status" id="">
                            <option value="OPEN">OPEN</option>
                            <option value="IN PROGRESS">IN PROGRESS</option>
                            <option value="COMPLETED">COMPLETED</option>
                            <option value="PENDING">PENDING</option>
                            <option value="CLOSE">CLOSE</option>
                        </select>
                    </div>
                ) : ""
            }
            
            <div className="">
                <span className="text-danger"> { message } </span>
            </div>
            {
                loading == true ? <Loader/> : ""
            }
            
            <div className="mt-2">
                <button type="submit" className="btn btn-primary me-3">
                    Valider
                </button>
                <Link to="/" className="btn btn-secondary">
                    Annuler
                </Link>
            </div>
        </form>
    )
}

export default CreateTodo