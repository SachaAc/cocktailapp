import { createContext, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const navigate = useNavigate();

    const [auth, setAuth] = useState({
        isAuth: false,
        user: null,
        status: "pending",
    });

    // -----------------------------
    // 1. Persist on refresh
    // -----------------------------
    useEffect(() => {
        const token = localStorage.getItem("token");

        async function fetchUser() {
            if (!token) {
                setAuth({
                    isAuth: false,
                    user: null,
                    status: "done",
                });
                return;
            }

            try {
                // Token decoderen is niet nodig bij NOVI API
                // Je kunt direct /api/me aanroepen
                const res = await api.get("/api/me");

                setAuth({
                    isAuth: true,
                    user: res.data,
                    status: "done",
                });
            } catch (e) {
                console.error("Kon user niet ophalen:", e);

                setAuth({
                    isAuth: false,
                    user: null,
                    status: "done",
                });
            }
        }

        fetchUser();
    }, []);

    // -----------------------------
    // 2. Registreren
    // -----------------------------
    async function register(email, password) {
        try {
            await api.post("/api/register", {
                email,
                password,
            });

            navigate("/login");
        } catch (e) {
            console.error("Registreren mislukt:", e);
        }
    }

    // -----------------------------
    // 3. Inloggen
    // -----------------------------
    async function login(email, password) {
        try {
            const res = await api.post("/api/login", {
                email,
                password,
            });

            localStorage.setItem("token", res.data.accessToken);

            setAuth({
                isAuth: true,
                user: res.data.user,
                status: "done",
            });

            navigate("/profile");
        } catch (e) {
            console.error("Login mislukt:", e);
        }
    }

    // -----------------------------
    // 4. Uitloggen
    // -----------------------------
    function logout() {
        localStorage.removeItem("token");

        setAuth({
            isAuth: false,
            user: null,
            status: "done",
        });

        navigate("/");
    }

    // -----------------------------
    // Loading state
    // -----------------------------
    if (auth.status === "pending") {
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
