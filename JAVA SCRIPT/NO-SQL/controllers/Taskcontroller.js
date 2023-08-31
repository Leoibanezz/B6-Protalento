const task = require('../models/Task')

const getAllTask = async (req, res) => {
    const task = await task.getAll()
    res.status(201).send({task:task.getAll()})
}

const insertTask = async (req, res) => {
    const { title, description, deadline } = req.body

    await task.insertTask({title, description, deadline})
    .then((response) =>{
        res.status(201).send({message:'Tarea actualizada'})

    })
    .catch((error)=> {
        res.status(401).send({message:'Error, datos invalidos'})
    })
}

const updateTask = async (req, res) => {
    const {id } = req.params
    const {title, description, deadline, done } = req.body

    await task.updateTask({title, description, deadline})
    .then((response) =>{
        res.status(201).send({message:'Tarea actualizada'})

    })
    .catch((error)=> {
        res.status(401).send({message:'Error, datos invalidos'})
    })

}

const removeTask = async (req, res) => {
    const{id } = req.params
    await task.removeTask({title, description, deadline})
    .then((response) =>{
        res.status(201).send({message:'Tarea eliminada'})

    })
    .catch((error)=> {
        res.status(401).send({message:'Error, tarea no encontrada'})
    })

}

const getOneTask = async (req, res) => {
    const { id } = req.params

    const result = await task.getAllTask(id)
    res.status(201).send({task:result})
}

module.exports = {
    getAllTask,
    insertTask,
    updateTask,
    removeTask,
    getOneTask
}