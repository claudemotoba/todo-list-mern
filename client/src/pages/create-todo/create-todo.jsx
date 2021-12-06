import { Link } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { useState } from 'react';

import { saveTodo } from '../../api/crudRequest';

const CreateTodo = () => {

    const [message, setMessage] = useState("");
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = async (data) => {

        const save = await saveTodo(data);

        console.log("save", save)
        if(typeof save == 'string') setMessage(save);
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)} className="col-sm-6 mx-auto mt-5">
            <div className="mb-3">
                <label htmlFor="" className="form-label">Titre <span className="text-danger">*</span> </label>
                <input 
                    type="text" 
                    {...register("title", { required: true, maxLength: 20 })} className="form-control" 
                    id="title" 
                    placeholder="Lire"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="" className="form-label">Description</label>
                <textarea {...register("description", { required: true, maxLength: 200 })}  className="form-control" id="description" rows="3"></textarea>
            </div>
            <div className="">
                <span className="text-danger"> { message } </span>
            </div>
            <div className="mt-2">
                <button type="submit" className="btn btn-primary me-3">
                    Ajouter
                </button>
                <Link to="/" className="btn btn-secondary">
                    Annuler
                </Link>
            </div>
        </form>
    )
}

export default CreateTodo