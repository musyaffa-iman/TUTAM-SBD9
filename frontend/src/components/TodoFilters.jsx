export const TodoFilters = ({ activeFilter, setActiveFilter }) => {
    return (
        <div className="flex flex-wrap items-center gap-2 mb-6 overflow-x-auto pb-2">
            <button 
                className={`text-xs font-semibold rounded-md px-3 py-1 whitespace-nowrap ${activeFilter === 'all' ? 'text-[#5C4AC7] dark:text-purple-300 bg-[#F3F2FD] dark:bg-gray-700' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setActiveFilter('all')}
            >
                All Tasks
            </button>
            <button 
                className={`text-xs font-normal rounded-md px-3 py-1 whitespace-nowrap ${activeFilter === 'today' ? 'text-[#5C4AC7] dark:text-purple-300 bg-[#F3F2FD] dark:bg-gray-700' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setActiveFilter('today')}
            >
                Today
            </button>
            <button 
                className={`text-xs font-normal rounded-md px-3 py-1 whitespace-nowrap ${activeFilter === 'upcoming' ? 'text-[#5C4AC7] dark:text-purple-300 bg-[#F3F2FD] dark:bg-gray-700' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setActiveFilter('upcoming')}
            >
                Upcoming
            </button>
            <button 
                className={`text-xs font-normal rounded-md px-3 py-1 whitespace-nowrap ${activeFilter === 'completed' ? 'text-[#5C4AC7] dark:text-purple-300 bg-[#F3F2FD] dark:bg-gray-700' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setActiveFilter('completed')}
            >
                Completed
            </button>
            <button 
                className={`text-xs font-normal rounded-md px-3 py-1 whitespace-nowrap ${activeFilter === 'important' ? 'text-[#5C4AC7] dark:text-purple-300 bg-[#F3F2FD] dark:bg-gray-700' : 'text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setActiveFilter('important')}
            >
                Important
            </button>
        </div>
    );
};