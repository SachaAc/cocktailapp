import {useNavigate, Link} from "react-router-dom";
import './Login.css';
import React from 'react';
import clouds from "../../assets/clouds.jpg";
import whitesatin from "../../assets/whitesatin.jpg";

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
                    <form onSubmit={handleLogin} className="loginform" style={{
                        backgroundImage: `url(${clouds})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}>
                        <input type="email" placeholder="Email"/>
                        <input type="password" placeholder="Password"/>
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
                </div>
            </main>
        </>
    );
}

export default Login