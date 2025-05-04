import API from './api';

export const loginUser = async (credentials) => {
    try {
        const response = await API.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const signupUser = async (userData) => {
    try {
        const response = await API.post('/auth/signup', userData);
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};

export const logout = async () => {
    try {
        const response = await API.get('/auth/logout');
        return response.data;
    } catch (error) {
        throw error.response?.data || error.message;
    }
};