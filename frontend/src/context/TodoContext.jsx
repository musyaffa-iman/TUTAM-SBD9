import { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useAuth } from './AuthContext';
import * as todoService from '../services/todoService';

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [activeFilter, setActiveFilter] = useState('all');
    const { user } = useAuth();

    const fetchTodos = async () => {
        try {
            setLoading(true);
            const response = await todoService.getTodos();
            setTodos(response.data || []);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const addTodo = async (todoData) => {
        try {
            const newTodo = await todoService.createTodo(todoData);
            setTodos([newTodo, ...todos]);
        } catch (err) {
            setError(err.message);
        }
    };

    const updateTodo = async (id, updates) => {
        try {
            await todoService.updateTodo(id, updates);
            setTodos(todos.map(todo =>
                todo._id === id ? { ...todo, ...updates } : todo
            ));
        } catch (err) {
            setError(err.message);
        }
    };

    const deleteTodo = async (id) => {
        try {
            await todoService.deleteTodo(id);
            setTodos(todos.filter(todo => todo._id !== id));
        } catch (err) {
            setError(err.message);
        }
    };

    const toggleComplete = async (id) => {
        const todo = todos.find(t => t._id === id);
        if (todo) {
            await updateTodo(id, { completed: !todo.completed });
        }
    };

    const toggleImportant = async (id) => {
        const todo = todos.find(t => t._id === id);
        if (todo) {
            await updateTodo(id, { important: !todo.important });
        }
    };

    // Helper function to check if a date is today
    const isDueToday = (dueDate) => {
        if (!dueDate) return false;
        const today = new Date();
        const due = new Date(dueDate);
        return (
            due.getDate() === today.getDate() &&
            due.getMonth() === today.getMonth() &&
            due.getFullYear() === today.getFullYear()
        );
    };

    // Memoized filtered todos
    const filteredTodos = useMemo(() => {
        return todos.filter(todo => {
            if (!todo || !todo._id) return false;
            
            switch (activeFilter) {
                case 'all':
                    return true;
                case 'completed':
                    return todo.completed;
                case 'upcoming':
                    return !todo.completed;
                case 'important':
                    return todo.important;
                case 'today':
                    return isDueToday(todo.dueDate);
                default:
                    return true;
            }
        }).sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }, [todos, activeFilter]);

    useEffect(() => {
        if (user) {
            fetchTodos();
        }
    }, [user]);

    return (
        <TodoContext.Provider value={{
            todos,
            filteredTodos,
            loading,
            error,
            activeFilter,
            setActiveFilter,
            addTodo,
            updateTodo,
            deleteTodo,
            toggleComplete,
            toggleImportant,
            fetchTodos
        }}>
            {children}
        </TodoContext.Provider>
    );
};

export const useTodos = () => useContext(TodoContext);