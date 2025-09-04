import React, { createContext, useState, useEffect } from "react";

// Создаём контекст
export const AuthContext = createContext();

// Провайдер
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // при первой загрузке берём user из localStorage
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // login: сохраняем user и токены
    const login = (userData, access, refresh) => {
        localStorage.setItem("user", JSON.stringify(userData));
        localStorage.setItem("access", access);
        localStorage.setItem("refresh", refresh);
        setUser(userData);
    };

    // logout: удаляем всё
    const logout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("access");
        localStorage.removeItem("refresh");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};