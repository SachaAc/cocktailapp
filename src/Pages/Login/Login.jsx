import {useNavigate, Link} from "react-router-dom";
import './Login.css';
import clouds from "../../assets/clouds.jpg";
import whitesatin from "../../assets/whitesatin.jpg";
import { useAuth } from '../../context/AuthContext.jsx';
import React, { useState } from 'react';

function Login() {
    const { user, login, logout } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(email, password);
        navigate("/favorites");
    };

    return (
        <>
            <main>
                <div className="loginwrapper">
                    {!user && (
                        <>
                            <form onSubmit={handleSubmit} className="loginform" style={{
                                backgroundImage: `url(${clouds})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center"
                            }}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button type="submit" className="loginbutton">Log in</button>
                            </form>

                            <p className="register"
                               style={{
                                   backgroundImage: `url(${whitesatin})`,
                                   backgroundSize: "cover",
                                   backgroundPosition: "center"
                               }}>
                                No account yet? <Link to="/register">Register here</Link>
                            </p>

                        </>
                    )}

                    {!user && (
                        <p>
                            Je bent uitgelogd.
                        </p>
                    )}

                    {user && (
                        <>
                            <p className="logged-in-message">
                                Je bent ingelogd!
                            </p>

                            <div>
                                <button onClick={logout} className="loginbutton">
                                    Log uit
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </main>
        </>
    );
}

export default Login;
