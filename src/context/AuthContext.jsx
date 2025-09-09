import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

const API_URL = 'https://kiban-backend.onrender.com/api/auth';

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
            setIsAuthenticated(true);
        }
        setLoading(false);
    }, []);

    const register = async (username, password) => {
        setLoading(true);
        try {
            const res = await axios.post(`${API_URL}/register`, { username, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            setIsAuthenticated(true);
            setLoading(false);
            return true;
        } catch (error) {
            alert(error.response?.data?.message || 'Registration failed');
            setLoading(false);
            return false;
        }
    };

    const login = async (username, password) => {
        setLoading(true);
        try {
            const res = await axios.post(`${API_URL}/login`, { username, password });
            localStorage.setItem('token', res.data.token);
            setToken(res.data.token);
            setIsAuthenticated(true);
            setLoading(false);
            return true;
        } catch (error) {
            alert(error.response?.data?.message || 'Login failed');
            setLoading(false);
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setToken(null);
        setIsAuthenticated(false);
    };

    const value = {
        token,
        isAuthenticated,
        loading,
        register,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};