"use strict"
const router = require('express').Router();
const TodoController = require('../controllers/todo.controller');

router.post('', TodoController.save());
router.put('/:id', TodoController.updateOne());
router.get('', TodoController.findAll());
router.get('/:id', TodoController.findOne());
router.get('/status/:status', TodoController.getByCategory());
router.delete('/:id', TodoController.deleteOne());

module.exports = router;