import { useNavigate, Link } from "react-router-dom";
import './Register.css';
import React from 'react';
import whitesatin from "../../assets/whitesatin.jpg";
import clouds from "../../assets/clouds.jpg";

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
                    <form onSubmit={handleRegister} className="registerform"
                          style={{
                              backgroundImage: `url(${clouds})`,
                              backgroundSize: "cover",
                              backgroundPosition: "center"}}>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Repeat password" />
                        <button type="submit" className="registerbutton">Register</button>
                    </form>

                    <p className="login"                style={{
                        backgroundImage: `url(${whitesatin})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"}}>
                        Already have an account? <Link to="/login">Log in here</Link>
                    </p>
                </div>
            </main>
        </>
    );
}

export default Register