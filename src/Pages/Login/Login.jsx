import { useNavigate, Link } from "react-router-dom";
import './Login.css';
import clouds from "../../assets/clouds.jpg";
import whitesatin from "../../assets/whitesatin.jpg";
import { useAuth } from '../../context/AuthContext.jsx';
import React, { useState } from 'react';

function Login() {
    const { user, login, logout } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            await login(email, password);
            navigate("/favorites");
        } catch (err) {
            console.error("Login mislukt:", err);
            setError("Login mislukt. Controleer je gegevens.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <div className="loginwrapper">

                {!user && (
                    <>
                        <form
                            onSubmit={handleSubmit}
                            className="loginform"
                            style={{
                                backgroundImage: `url(${clouds})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />

                            {error && <p className="error">{error}</p>}

                            <button type="submit" className="loginbutton" disabled={loading}>
                                {loading ? "Logging in..." : "Log in"}
                            </button>
                        </form>

                        <p
                            className="register"
                            style={{
                                backgroundImage: `url(${whitesatin})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}
                        >
                            No account yet? <Link to="/register">Register here</Link>
                        </p>

                        <p style={{ textAlign: "center", marginTop: "20px" }}>
                            Je bent uitgelogd.
                        </p>
                    </>
                )}

                {user && (
                    <div style={{ textAlign: "center", marginTop: "20px" }}>
                        <button onClick={logout} className="loginbutton">
                            Log uit
                        </button>
                    </div>
                )}

            </div>
        </main>
    );
}

export default Login;
