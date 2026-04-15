import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from "axios";

export const AuthContext = createContext();

const API_URL = "https://novi-backend-api-wgsgz.ondigitalocean.app";
const PROJECT_ID = "3cc8d4cf-96a8-4a9b-b5f8-6e4e00cc1507";

export function AuthContextProvider({ children }) {
    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    // ---------------------------
    // REGISTER
    // ---------------------------
    async function register(email, password, username) {
        try {
            await axios.post(
                `${API_URL}/register`,
                { email, password, username },
                {
                    headers: {
                        "novi-education-project-id": PROJECT_ID,
                    },
                }
            );

            navigate("/login");
        } catch (e) {
            console.error("Registreren mislukt:", e);
        }
    }

    // ---------------------------
    // LOGIN
    // ---------------------------
    async function login(email, password) {
        try {
            const res = await axios.post(
                `${API_URL}/login`,
                { email, password },
                {
                    headers: {
                        "novi-education-project-id": PROJECT_ID,
                    },
                }
            );

            const token = res.data.accessToken;
            localStorage.setItem("token", token);

            const decoded = jwtDecode(token);
            const userId = decoded.sub;

            const userRes = await axios.get(`${API_URL}/users/${userId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "novi-education-project-id": PROJECT_ID,
                },
            });

            setAuth({
                isAuth: true,
                user: userRes.data,
                status: "done",
            });

            navigate("/profile");
        } catch (e) {
            console.error("Login mislukt:", e);
        }
    }

    // ---------------------------
    // LOGOUT
    // ---------------------------
    function logout() {
        localStorage.removeItem("token");

        setAuth({
            isAuth: false,
            user: null,
            status: "done",
        });

        navigate("/");
    }

    // ---------------------------
    // PERSIST ON REFRESH
    // ---------------------------
    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            setAuth({
                isAuth: false,
                user: null,
                status: "done",
            });
            return;
        }

        async function fetchUser() {
            try {
                const decoded = jwtDecode(token);
                const userId = decoded.sub;

                const userRes = await axios.get(`${API_URL}/users/${userId}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "novi-education-project-id": PROJECT_ID,
                    },
                });

                setAuth({
                    isAuth: true,
                    user: userRes.data,
                    status: "done",
                });
            } catch (e) {
                console.error("Persist mislukt:", e);

                setAuth({
                    isAuth: false,
                    user: null,
                    status: "done",
                });
            }
        }

        fetchUser();
    }, []);

    if (auth.status !== "done") {
        return <p>Loading...</p>;
    }

    return (
        <AuthContext.Provider value={{ auth, login, logout, register }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
