import { createContext, useState, useContext } from 'react';
import { signupUser, loginUser } from '../services/authService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const register = async (userData) => {
        setIsLoading(true);
        try {
            const user = await signupUser(userData);
            setUser(user.data);
            return { success: true };
        } catch (error) {
            return { success: false, error };
        } finally {
            setIsLoading(false);
        }
    };

    const login = async (credentials) => {
        setIsLoading(true);
        try {
            const user = await loginUser(credentials);
            setUser(user.data);
            return { success: true };
            } catch (error) {
            return { success: false, error };
            } finally {
            setIsLoading(false);
            }
    };

    const logout = () => setUser(null);

    return (
        <AuthContext.Provider value={{ user, isLoading, register, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);