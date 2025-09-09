import React, { useState } from 'react';
import { useAuth } from './context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const { login, loading } = useAuth();
    const [formData, setFormData] = useState({ username: '', password: '' });
    const [error, setError] = useState('');
    const { username, password } = formData;
    const navigate = useNavigate();

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = async (e) => {
        e.preventDefault();
        setError('');

        const success = await login(username, password);
            if (success) {
            navigate('/start');
            } else {
              setError('User does not exist');
            }
        };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[url('/src/assets/background1.webp')] font-noto bg-cover bg-center">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0" />
            <form
                onSubmit={onSubmit}
                className="relative z-10 p-8 bg-gray-800/70 rounded-lg shadow-xl w-96 border border-gray-700"
            >
                <h2 className="text-3xl font-bold mb-6 text-center text-orange-400">Login</h2>
                
                {error && (
                    <p className="text-red-500 text-center mb-4">{error}</p>
                )}

                <div className="mb-4">
                    <input
                        type="text"
                        name="username"
                        value={username}
                        onChange={onChange}
                        required
                        placeholder="Username"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={onChange}
                        required
                        placeholder="Password"
                        className="w-full px-3 py-2 bg-gray-700 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                </div>
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-2 bg-orange-600 rounded-md hover:bg-orange-700 transition duration-300 disabled:bg-orange-800"
                >
                    {loading ? 'Logging in...' : 'Login'}
                </button>
                <p className="text-center text-gray-400 mt-4">
                    Don't have an account?{' '}
                    <Link
                        to="/register"
                        className="text-orange-400 hover:underline"
                    >
                        Register here
                    </Link>
                </p>
            </form>
        </div>
    );
};

export default Login;
