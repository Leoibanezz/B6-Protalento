const express = require ('express');
const router = express.Router();
const TasksController = require('../controller/TaskController')

router.get('/', TasksController.getAllTask)

router.post('/', TasksController.insertNewTask)

router.put('/:id', TasksController.updateTask)

router.delete('/:id', TasksController.getOneTask)

module.exports = router