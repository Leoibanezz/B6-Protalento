const mongoose = require ('mongoose')


const taskSchema = {
    title: {
        type: String,
        required: true,
        
    },
    description: String,
    deadline:{
        type: Date,
        required: true,
        default: new Date()

    },
    done:{
        type: Boolean,
        default: false
    }
    
}

const Task = mongoose.model('Task', taskSchema)

const getAll = async () => {
    const result = await Task.find()
    return result
}

const insertTask = async (task) => {
    return await Task.insertOne(task)

}

const updateTask = async (id, newtask ) => {
    const oldTask = await Task.findById(id)

    newtask.title = newtask.title;
    newtask.description = newtask.description
    newtask.deadline =newtask.deadline
    newtask.done = newtask.done

    return await oldTask.save()

}

const removeTask = async (id) => {
    return await Task.deleteOne({id})
}

const getTask = async (id) => {
    return await Task.findById(id)
}

module.exports = {
    getAll,
    insertTask,
    updateTask,
    removeTask,
    getTask
}