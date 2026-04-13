import { useNavigate, Link } from "react-router-dom";
import './Register.css';
import React, { useState } from 'react';
import whitesatin from "../../assets/whitesatin.jpg";
import clouds from "../../assets/clouds.jpg";
import { useAuth } from "../../context/AuthContext.jsx";

function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function handleRegister(e) {
        e.preventDefault();

        try {
            await register(email, password);
            navigate("/login");
        } catch (err) {
            console.error("Registratie mislukt:", err);
        }
    }

    return (
        <main>
            <div className="registerwrapper">
                <form
                    onSubmit={handleRegister}
                    className="registerform"
                    style={{
                        backgroundImage: `url(${clouds})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
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

                    <button type="submit" className="registerbutton">
                        Register
                    </button>
                </form>

                <p
                    className="login"
                    style={{
                        backgroundImage: `url(${whitesatin})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    Already have an account? <Link to="/login">Log in here</Link>
                </p>
            </div>
        </main>
    );
}

export default Register;
