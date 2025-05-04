import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { useDarkMode } from '../hooks/useDarkMode';
import { useAuth } from '../context/AuthContext';

export const LoginPage = () => {
    const { darkMode } = useDarkMode();
    const navigate = useNavigate();
    const { login, isLoading } = useAuth();

    const handleSubmit = async (formData) => {
        try {
        const result = await login(formData);
        if (result.success) {
            navigate('/');
        }
        } catch (error) {
        // Error is handled by AuthForm
        return error;
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 ${darkMode ? 'dark bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 sm:p-10">
            <AuthForm type="login" onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
        </div>
    );
};