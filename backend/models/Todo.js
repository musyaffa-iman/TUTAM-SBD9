const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    title: {
    type: String,
    required: [true, 'Please add a title']
    },
    description: {
    type: String,
    required: false
    },
    dueDate: {
    type: Date,
    required: false
    },
    category: {
    type: String,
    enum: ['Work', 'Personal', 'Shopping', 'Health'],
    default: 'Personal'
    },
    priority: {
    type: String,
    enum: ['High', 'Medium', 'Low', ''],
    default: ''
    },
    completed: {
    type: Boolean,
    default: false
    },
    important: {
    type: Boolean,
    default: false
    },
    user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
    },
    createdAt: {
    type: Date,
    default: Date.now
    }
});

module.exports = mongoose.model('Todo', TodoSchema);