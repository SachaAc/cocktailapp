import { useNavigate, Link } from "react-router-dom";
import './Register.css';
import React from 'react';

function Register() {
    const navigate = useNavigate();

    function handleRegister(e) {
        e.preventDefault();
        // registratie logica...
        navigate("/"); // stuur naar home na registreren
    }

    return (
        <>
            <main>
                <div className="registerwrapper">
                    <h1>Register</h1>
                    <form onSubmit={handleRegister} className="registerform">
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Repeat password" />
                        <button type="submit" className="registerbutton">Register</button>
                    </form>

                    <p className="login">
                        Already have an account? <Link to="/login">Log in here</Link>
                    </p>
                </div>
            </main>
        </>
    );
}

export default Register