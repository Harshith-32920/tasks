import React, { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token') || '');

    const login = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:8000/token', new URLSearchParams({
                username,
                password
            }), {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });
            const { access_token } = response.data;
            setToken(access_token);
            localStorage.setItem('token', access_token);
            // Optionally, fetch user data here and set it
        } catch (error) {
            console.error('Login failed');
        }
    };

    const logout = () => {
        setToken('');
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
