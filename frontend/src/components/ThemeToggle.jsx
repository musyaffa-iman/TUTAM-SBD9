import { FaMoon, FaSun } from 'react-icons/fa';

export const ThemeToggle = ({ darkMode, toggleDarkMode }) => {
    return (
    <button 
        className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md w-full text-left"
        onClick={toggleDarkMode}
    >
        {darkMode ? (
        <>
            <FaSun className="text-lg" />
            <span className="text-sm font-normal">Light Mode</span>
        </>
        ) : (
        <>
            <FaMoon className="text-lg" />
            <span className="text-sm font-normal">Dark Mode</span>
        </>
        )}
    </button>
    );
};