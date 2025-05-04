import { useNavigate } from 'react-router-dom';
import { AuthForm } from '../components/AuthForm';
import { useDarkMode } from '../hooks/useDarkMode';
import { useAuth } from '../context/AuthContext';

export const SignupPage = () => {
    const { darkMode } = useDarkMode();
    const navigate = useNavigate();
    const { register, isLoading } = useAuth();

    const handleSubmit = async (formData) => {
        try {
        const result = await register(formData);
        if (result.success) {
            navigate('/');
        }
        } catch (error) {
        return error;
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center p-4 ${darkMode ? 'dark bg-gray-900' : 'bg-[#F9FAFB]'}`}>
        <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-sm p-8 sm:p-10">
            <AuthForm type="signup" onSubmit={handleSubmit} isLoading={isLoading} />
        </div>
        </div>
    );
};