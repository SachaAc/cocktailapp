import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const register = async (email, password) => {
        await axios.post("https://novi-backend-api-wgsgz.ondigitalocean.app/api/register", { email, password });
    };

    const login = async (email, password) => {
        const res = await axios.post("https://novi-backend-api-wgsgz.ondigitalocean.app/api/login", { email, password });

        localStorage.setItem("token", res.data.accessToken);

        setUser(res.data.user);
        localStorage.setItem("user", JSON.stringify(res.data.user));
    };


    const logout = () => {
        setUser(null);
        localStorage.removeItem("user");
        localStorage.removeItem("token");
    };


    return (
        <AuthContext.Provider value={{ user, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);
