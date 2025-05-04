import axios from 'axios';

const API = axios.create({
  baseURL: [ 'http://localhost:5000/api/v1', 'https://tutam9-musyaffaimansupriadi-be.vercel.app/api/v1' ],
  withCredentials: true
});


API.interceptors.request.use((config) => {
    return config;
});

API.interceptors.response.use(
    (response) => response,
    (error) => {
    console.error('API Error:', error.response?.data);
    return Promise.reject(error);
    }
);

export default API;