import { FaRegStar, FaStar, FaTrash, FaPencilAlt } from 'react-icons/fa';

export const TodoItem = ({ todo, onToggleComplete, onToggleImportant, onDelete }) => {
    return (
        <div 
            className={`flex flex-col sm:flex-row items-start sm:items-center p-3 sm:p-4 bg-white dark:bg-gray-700 rounded-lg shadow-sm ${
                todo.priority === 'High' ? 'border-l-4 border-[#EF4444]' : ''
            } ${
                !todo.completed && todo.important ? 'border-l-4 border-[#5C4AC7] dark:border-purple-500' : ''
            }`}
        >
            <div className="flex items-center w-full sm:w-auto mb-2 sm:mb-0">
                <input 
                    type="checkbox" 
                    checked={todo.completed}
                    onChange={() => onToggleComplete(todo._id)}
                    className="form-checkbox h-5 w-5 text-[#5C4AC7] dark:text-purple-500 rounded focus:ring-[#5C4AC7] dark:focus:ring-purple-500 border-gray-300 dark:border-gray-600 dark:bg-gray-600"
                />
                
                <div className="ml-3 flex-1 sm:flex-none sm:w-[200px] md:w-auto">
                    <div className={`font-medium ${
                        todo.completed ? 'line-through text-gray-400 dark:text-gray-500' : 'text-gray-900 dark:text-white'
                    }`}>
                        {todo.title}
                    </div>
                </div>
            </div>
            
            <div className="w-full sm:flex-1 sm:ml-3">
                {todo.dueDate && (
                    <div className={`text-xs ${
                        todo.completed ? 'text-gray-400 dark:text-gray-500' : 'text-gray-500 dark:text-gray-400'
                    } mb-2 sm:mb-1`}>
                        Due: {new Date(todo.dueDate).toLocaleDateString()}
                    </div>
                )}
                
                <div className="flex flex-wrap items-center gap-1 sm:gap-2">
                    {todo.category && (
                        <span className={`text-[10px] font-semibold rounded-full px-2 py-0.5 ${
                            todo.category === 'Work' ? 'bg-[#F3F2FD] dark:bg-gray-600 text-[#5C4AC7] dark:text-purple-300' :
                            todo.category === 'Health' ? 'bg-[#FEE2E2] dark:bg-red-900/30 text-[#EF4444] dark:text-red-300' :
                            todo.category === 'Shopping' ? 'bg-[#D1FAE5] dark:bg-green-900/30 text-[#047857] dark:text-green-300' :
                            'bg-gray-100 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
                        }`}>
                            {todo.category}
                        </span>
                    )}
                    
                    {todo.priority === 'High' && (
                        <span className="text-[10px] font-semibold bg-[#FEF3C7] dark:bg-yellow-900/30 text-[#B45309] dark:text-yellow-300 rounded-full px-2 py-0.5">
                            High
                        </span>
                    )}
                    {todo.priority === 'Medium' && (
                        <span className="text-[10px] font-semibold bg-[#E0F2FE] dark:bg-blue-900/30 text-[#0369A1] dark:text-blue-300 rounded-full px-2 py-0.5">
                            Medium
                        </span>
                    )}
                    {todo.priority === 'Low' && (
                        <span className="text-[10px] font-semibold bg-[#ECFDF5] dark:bg-green-900/30 text-[#047857] dark:text-green-300 rounded-full px-2 py-0.5">
                            Low
                        </span>
                    )}
                    
                    {todo.important && !todo.completed && (
                        <span className="text-[10px] font-semibold bg-[#D1FAE5] dark:bg-green-900/30 text-[#047857] dark:text-green-300 rounded-full px-2 py-0.5">
                            Important
                        </span>
                    )}
                </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2 sm:mt-0 ml-auto">
                <button 
                    onClick={() => onToggleImportant(todo._id)}
                    className="text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400 p-1 rounded-full"
                >
                    {todo.important ? (
                        <FaStar className="text-yellow-500" />
                    ) : (
                        <FaRegStar />
                    )}
                </button>
                
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 p-1 rounded-full">
                    <FaPencilAlt className="text-sm" />
                </button>
                
                <button 
                    className="text-gray-400 hover:text-red-500 dark:hover:text-red-400 p-1 rounded-full"
                    onClick={() => onDelete(todo._id)}
                >
                    <FaTrash className="text-sm" />
                </button>
            </div>
        </div>
    );
};