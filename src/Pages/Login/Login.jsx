import { useNavigate, Link } from "react-router-dom";
import './Login.css';
import React from 'react';

function Login() {
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault();
        // login logica...
        navigate("/"); // stuur naar home
    }

    return (
        <>
            <main>
            <div className="loginwrapper">
            <h1>Login</h1>
            <form onSubmit={handleLogin} className="loginform">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit" className="loginbutton">Log in</button>
            </form>

            <p className="register">
                No account yet? <Link to="/register">Register here</Link>
            </p>
                </div>
            </main>
        </>
    );
}

export default Login