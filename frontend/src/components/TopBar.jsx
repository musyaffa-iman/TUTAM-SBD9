import { FaSyncAlt, FaBell, FaSignOutAlt } from 'react-icons/fa';

export const TopBar = ({ user, onLogout }) => {
    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">Todo List</h1>
            <div className="flex items-center gap-6 ml-6">
                <button aria-label="Refresh" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition">
                    <FaSyncAlt className="text-lg" />
                </button>
                <button aria-label="Notifications" className="relative text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition">
                    <FaBell className="text-lg" />
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white dark:border-gray-800"></span>
                </button>
                <div className="flex items-center gap-2 cursor-pointer select-none">
                    <div className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-600 flex items-center justify-center">
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                            {user?.name?.charAt(0)?.toUpperCase() || 'G'}
                        </span>
                    </div>
                    <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        {user?.name || 'Guest'}
                    </span>
                    <button 
                        onClick={onLogout}
                        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1"
                        title="Logout"
                    >
                        <FaSignOutAlt className="text-lg" />
                    </button>
                </div>
            </div>
        </div>
    );
};