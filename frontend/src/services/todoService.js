import API from './api';

export const getTodos = async () => {
    try {
        const response = await API.get('/todos');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const getTodo = async (id) => {
    try {
        const response = await API.get(`/todos/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const createTodo = async (todoData) => {
    try {
        const response = await API.post('/todos', todoData);
        return response.data.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const updateTodo = async (id, todoData) => {
    try {
        const response = await API.put(`/todos/${id}`, todoData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const deleteTodo = async (id) => {
    try {
        const response = await API.delete(`/todos/${id}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};