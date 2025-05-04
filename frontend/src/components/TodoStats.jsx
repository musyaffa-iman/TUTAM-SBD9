export const TodoStats = ({ todos }) => {
    // Calculate completed count from todos array
    const completedCount = todos.filter(todo => todo?.completed).length;
    
    // Safely calculate percentage (handle division by zero)
    const completionPercentage = todos.length > 0 
        ? Math.round((completedCount / todos.length) * 100)
        : 0;

    return (
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                <span>{todos.length} {todos.length === 1 ? 'task' : 'tasks'}</span>
                <span>{completedCount} completed</span>
            </div>
            <div className="mt-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div 
                    className="bg-[#5C4AC7] dark:bg-purple-500 h-2 rounded-full transition-all duration-300" 
                    style={{ width: `${completionPercentage}%` }}
                ></div>
            </div>
        </div>
    );
};