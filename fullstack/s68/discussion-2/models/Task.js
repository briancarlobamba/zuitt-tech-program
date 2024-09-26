const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Task Name is Required']
    },
    description: {
        type: String,
        required: [true, 'Task Description is Required']
    },
    status: {
        type: String,
        default: 'Pending'
    },
    createdOn: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Task', taskSchema);