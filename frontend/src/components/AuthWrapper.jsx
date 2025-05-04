import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { AuthForm } from './AuthForm';

const AuthWrapper = () => {
    const { register, login, isLoading } = useAuth();
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    
    const isLogin = location.pathname === '/login';

    const handleSubmit = async (formData) => {
        try {
        const result = isLogin 
            ? await login(formData)
            : await register(formData);
        
        if (result.success) {
            navigate('/');
            } else {
            setError(result.error);
            }
        } catch (err) {
            setError(err.message || 'An error occurred');
        }
    };

    return (
    <AuthForm 
        type={isLogin ? 'login' : 'signup'}
        onSubmit={handleSubmit}
        isLoading={isLoading}
        error={error}
    />
    );
};

export default AuthWrapper;