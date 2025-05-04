import {
    FaHome, FaTasks, FaCalendarAlt, FaCommentAlt,
    FaBriefcase, FaShoppingCart, FaHeart,
    FaCog, FaQuestionCircle
} from 'react-icons/fa';
import { ThemeToggle } from './ThemeToggle';

export const Sidebar = ({ darkMode, toggleDarkMode }) => {
    return (
        <aside className="bg-white dark:bg-gray-800 w-full md:w-64 flex flex-col justify-between border-r border-gray-200 dark:border-gray-700 fixed md:static bottom-0 z-10">
            {/* Desktop Header */}
            <div className="hidden md:block">
                <div className="flex items-center gap-2 px-6 py-6">
                    <div className="w-8 h-8 rounded-full bg-[#5C4AC7] flex items-center justify-center text-white font-extrabold text-2xl select-none">
                        m
                    </div>
                    <span className="font-semibold text-xl text-[#1F2937] dark:text-white">
                        Musy-todo
                    </span>
                </div>
            </div>

            {/* Mobile Bottom Navigation */}
            <div className="md:hidden flex justify-around py-2 border-t border-gray-200 dark:border-gray-700 h-16">
                <a className="flex flex-col items-center text-gray-600 dark:text-gray-300 p-2 rounded-md" href="#">
                    <FaHome className="text-lg" />
                    <span className="text-xs mt-1">Home</span>
                </a>
                <a aria-current="page" className="flex flex-col items-center text-[#5C4AC7] dark:text-purple-300 p-2 rounded-md" href="#">
                    <FaTasks className="text-lg" />
                    <span className="text-xs mt-1">Tasks</span>
                </a>
                <a className="flex flex-col items-center text-gray-600 dark:text-gray-300 p-2 rounded-md" href="#">
                    <FaCalendarAlt className="text-lg" />
                    <span className="text-xs mt-1">Calendar</span>
                </a>
                <a className="flex flex-col items-center text-gray-600 dark:text-gray-300 p-2 rounded-md" href="#">
                    <FaCommentAlt className="text-lg" />
                    <span className="text-xs mt-1">Notes</span>
                </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
                <nav className="mt-2 flex flex-col gap-1 px-4">
                    <a className="flex items-center gap-3 text-gray-400 hover:text-[#5C4AC7] dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaHome className="text-lg" />
                        <span className="text-sm font-normal">Dashboard</span>
                    </a>
                    <a aria-current="page" className="flex items-center gap-3 text-white font-semibold bg-[#5C4AC7] dark:bg-purple-600 py-3 px-4 rounded-md" href="#">
                        <FaTasks className="text-lg" />
                        <span className="text-sm font-semibold">Todo List</span>
                    </a>
                    <a className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaCalendarAlt className="text-lg" />
                        <span className="text-sm font-normal">Calendar</span>
                    </a>
                    <a className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaCommentAlt className="text-lg" />
                        <span className="text-sm font-normal">Notes</span>
                    </a>
                </nav>

                <div className="mt-8 px-4 text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wider">
                    Categories
                </div>
                <nav className="mt-2 flex flex-col gap-1 px-4">
                    <a className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaBriefcase className="text-lg" />
                        <span className="text-sm font-normal">Work</span>
                    </a>
                    <a className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaHome className="text-lg" />
                        <span className="text-sm font-normal">Personal</span>
                    </a>
                    <a className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaShoppingCart className="text-lg" />
                        <span className="text-sm font-normal">Shopping</span>
                    </a>
                    <a className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaHeart className="text-lg" />
                        <span className="text-sm font-normal">Health</span>
                    </a>
                </nav>

                <div className="mt-8 px-4 text-xs text-gray-400 dark:text-gray-500 uppercase font-semibold tracking-wider">
                    Settings
                </div>
                <nav className="mt-2 flex flex-col gap-1 px-4 pb-6">
                    <a className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaCog className="text-lg" />
                        <span className="text-sm font-normal">Settings</span>
                    </a>
                    <ThemeToggle darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
                    <a className="flex items-center gap-3 text-gray-600 hover:text-[#5C4AC7] dark:text-gray-300 dark:hover:text-purple-300 py-3 px-4 rounded-md" href="#">
                        <FaQuestionCircle className="text-lg" />
                        <span className="text-sm font-normal">Help</span>
                    </a>
                </nav>
            </div>
        </aside>
    );
};
