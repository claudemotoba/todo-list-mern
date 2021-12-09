"use strict";
const TodoModel = require('../models/todo.model');
const ErrorManagement = require('../utilities/error-management.utilitie');

class TodoController{

    static save(){
        return async (req, res) => {
            try {
                const todo = await TodoModel.create(req.body);
                return res.status(200).json({ status: 200, description: "success", response: todo });

            } catch (error) {

                const err = ErrorManagement(error, res);
                if(typeof err == 'string')
                    return res.status(500).json({ status: 500, description: err, response: null }) ;

               return res.status(400).json({ status: 400, description: err[Object.keys(err)[0]], response: null });
                
            } 
        }
    }

    static findAll(){
        return async (req, res)=>{
            try {
                const todos = await TodoModel.find()
                if(!todos){
                    return  res.status(200).json({ status: 200, description: "Aucune tache trouvée", response: [] });
                }else{
                   
                    return  res.status(200).json({ status: 200, description: "success", response: todos });
                }
                    
            } catch (error) {
                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }

    static findOne(){
        return async (req, res) => {
            try {
                const { params: { id } } = req;
                const todo = await TodoModel.findById(id);

                if(!todo)
                    return res.status(200).json({ status: 200, description: "Aucune tâche trouvée", response: null });
                else 
                    return res.status(200).json({ status: 200, description: "success", response: todo });

            } catch (error) {
                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }

    static updateOne(){
        return async (req, res) => {
            try {
                const { params: { id } } = req;
                const todo = await TodoModel.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true
                })

                if(!todo)
                    return res.status(200).json({ status: 200, description: "Aucune tâche trouvée", response: null });
                else 
                    return res.status(200).json({ status: 200, description: "success", response: todo });

            } catch (error) {

                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }

    static deleteOne(){
        return async (req, res) => {
            try {
                const { params: { id } } = req;
                const user = await TodoModel.findById(id)

                if(!user){
                    return res.status(200).json({ status: 200, description: "Aucune tâche trouvée", response: null });
                }
                
                await TodoModel.remove({ _id: id })
                
                return res.status(200).json({ status: 200, description: "success", response: null });


            } catch (error) {
                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }

    static getByCategory(){
        return async (req, res) => {
            const { params: { status } } =  req
            
            try {
                const todos = await TodoModel.find({ status: status })
                .sort( { "createdAt": -1 } ).limit(20);

                if(!todos){
                    return  res.status(200).json({ status: 200, description: "Aucune tache trouvée", response: [] });
                }else{
                   
                    return  res.status(200).json({ status: 200, description: "success", response: todos });
                }
                    
            } catch (error) {
                const err = ErrorManagement(error, res);
                return res.status(500).json({ status: 500, description: err, response: null }) ;
            }
        }
    }


}

module.exports = TodoController;