const Todo = require('../models/Todo');
const ErrorResponse = require('../utils/errorResponse');

// Get all todos for a user
exports.getTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find({ user: req.user.id }).sort('-createdAt');
        res.status(200).json({
            success: true,
            count: todos.length,
            data: todos
        });
    } catch (err) {
        next(err);
    }
};

// Get single todo
exports.getTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id);

        if (!todo) {
            return next(new ErrorResponse(`Todo not found with id of ${req.params.id}`, 404));
        }

        // Make sure user owns the todo
        if (todo.user.toString() !== req.user.id) {
            return next(new ErrorResponse(`User not authorized to access this todo`, 401));
        }

        res.status(200).json({
            success: true,
            data: todo
        });
    } catch (err) {
        (err);
    }
};

// Create new todo
exports.createTodo = async (req, res, next) => {
    try {
        // Add user to req.body
        req.body.user = req.user.id;

        const todo = await Todo.create(req.body);

        res.status(201).json({
            success: true,
            data: todo
        });
    } catch (err) {
        next(err);
    }
};

// Update todo
exports.updateTodo = async (req, res, next) => {
    try {
        let todo = await Todo.findById(req.params.id);

        if (!todo) {
            return next(new ErrorResponse(`Todo not found with id of ${req.params.id}`, 404));
        }

        // Make sure user owns the todo
        if (todo.user.toString() !== req.user.id) {
            return next(new ErrorResponse(`User not authorized to update this todo`, 401));
        }

        todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });

        res.status(200).json({
            success: true,
            data: todo
        });
    } catch (err) {
        next(err);
    }
};

// Delete todo
exports.deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findOneAndDelete({
            _id: req.params.id,
            user: req.user.id // Ensures the user owns the todo
        });

        if (!todo) {
            return next(new ErrorResponse(`Todo not found or unauthorized`, 404));
        }

        res.status(200).json({
            success: true,
            data: {}
        });
    } catch (err) {
        next(err);
    }
};