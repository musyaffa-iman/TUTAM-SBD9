import { FaEnvelope, FaLock, FaUser, FaArrowRight } from 'react-icons/fa';

export const AuthForm = ({ type, onSubmit, isLoading, error }) => {
    const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    if (type === 'login') {
        delete data.name;
    }
    
    onSubmit(data);
    };

    return (
        <div className="w-full max-w-md mx-auto">
        <div className="text-center mb-8">
            <div className="w-16 h-16 rounded-full bg-[#5C4AC7] flex items-center justify-center text-white font-extrabold text-2xl mx-auto mb-4">
            m
            </div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
            {type === 'login' ? 'Welcome back' : 'Create an account'}
            </h1>
            <p className="text-gray-500 dark:text-gray-400">
            {type === 'login' 
                ? 'Sign in to your account to continue' 
                : 'Get started with your free account'}
            </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
            {type === 'signup' && (
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaUser className="text-gray-400" />
                </div>
                <input
                name="name"
                type="text"
                required
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C4AC7] dark:focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                placeholder="Full name"
                />
            </div>
        )}

        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
            </div>
            <input
                name="email"
                type="email"
                required
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C4AC7] dark:focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                placeholder="Email address"
            />
        </div>

        <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
            </div>
            <input
                name="password"
                type="password"
                required
                minLength="6"
                className="w-full pl-10 pr-4 py-3 text-sm border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5C4AC7] dark:focus:ring-purple-500 focus:border-transparent bg-white dark:bg-gray-700 dark:text-white"
                placeholder="Password"
            />
        </div>

        {type === 'login' && (
            <div className="flex items-center justify-between">
                <label className="flex items-center">
                <input
                    name="rememberMe"
                    type="checkbox"
                    className="form-checkbox h-4 w-4 text-[#5C4AC7] dark:text-purple-500 rounded focus:ring-[#5C4AC7] dark:focus:ring-purple-500 border-gray-300 dark:border-gray-600 dark:bg-gray-600"
                />
                <span className="ml-2 text-sm text-gray-600 dark:text-gray-300">Remember me</span>
                </label>
                <a href="#" className="text-sm text-[#5C4AC7] dark:text-purple-400 hover:underline">
                Forgot password?
                </a>
            </div>
        )}

        <button
            type="submit"
            disabled={isLoading}
            className="w-full flex items-center justify-center gap-2 bg-[#5C4AC7] dark:bg-purple-600 text-white rounded-lg px-4 py-3 text-sm hover:bg-[#4a3db0] dark:hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-[#5C4AC7] dark:focus:ring-purple-500 focus:ring-offset-2 transition-colors"
            >
            {isLoading ? (
                'Loading...'
            ) : (
                <>
                {type === 'login' ? 'Sign in' : 'Sign up'}
                <FaArrowRight />
                </>
            )}
            </button>
        </form>

        {error && (
            <div className="text-red-500 text-sm text-center mt-4">
            {error}
            </div>
        )}

        <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
            {type === 'login' ? (
            <>
                Don't have an account?{' '}
                <a href="/signup" className="text-[#5C4AC7] dark:text-purple-400 hover:underline">
                Sign up
                </a>
            </>
            ) : (
            <>
                Already have an account?{' '}
                <a href="/login" className="text-[#5C4AC7] dark:text-purple-400 hover:underline">
                Sign in
                </a>
            </>
            )}
        </div>
        </div>
    );
};