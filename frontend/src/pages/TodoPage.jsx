import { useNavigate } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { TopBar } from '../components/TopBar';
import { TodoForm } from '../components/TodoForm';
import { TodoFilters } from '../components/TodoFilters';
import { TodoItem } from '../components/TodoItem';
import { TodoStats } from '../components/TodoStats';
import { useDarkMode } from '../hooks/useDarkMode';
import { useAuth } from '../context/AuthContext';
import { useTodos } from '../context/TodoContext';

export const TodoPage = () => {
    const { darkMode, toggleDarkMode } = useDarkMode();
    const { user, logout } = useAuth();
    const {
        todos,
        filteredTodos,
        loading,
        error,
        activeFilter,
        setActiveFilter,
        addTodo,
        toggleComplete,
        deleteTodo,
        toggleImportant
    } = useTodos();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    const handleAddTodo = async (todoData) => {
        await addTodo(todoData);
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-[#F9FAFB] text-[#374151] dark:bg-gray-900 dark:text-gray-200">
            <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

            {/* Main Content Area */}
            <main className="flex-1 p-4 pb-20 md:p-6 md:pb-6">
                <TopBar user={user} onLogout={handleLogout} />

                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-4 md:p-6">
                    <TodoForm onSubmit={handleAddTodo} />

                    <TodoFilters
                        activeFilter={activeFilter}
                        setActiveFilter={setActiveFilter}
                    />

                    {loading && <div className="text-center py-4">Loading...</div>}
                    {error && <div className="text-red-500 py-4">{error}</div>}

                    <div className="space-y-3">
                        {filteredTodos.map(todo => (
                            <TodoItem
                                key={todo._id}
                                todo={todo}
                                onToggleComplete={toggleComplete}
                                onToggleImportant={toggleImportant}
                                onDelete={deleteTodo}
                            />
                        ))}
                    </div>

                    <TodoStats todos={todos} />
                </div>
            </main>
        </div>
    );
};
