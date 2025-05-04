const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  important: {
    type: Boolean,
    default: false
  },
  dueDate: {
    type: String,
    default: 'No due date'
  },
  category: {
    type: String,
    default: 'Personal'
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', ''],
    default: ''
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Todo', todoSchema);