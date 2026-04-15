import { useNavigate, Link } from "react-router-dom";
import './Register.css';
import React, { useState } from 'react';
import whitesatin from "../../assets/whitesatin.jpg";
import clouds from "../../assets/clouds.jpg";
import { useAuth } from "../../context/AuthContext.jsx";
import axios from "axios";

function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function handleRegister(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post(
                'https://novi-backend-api-wgsgz.ondigitalocean.app/login',
                {
                    email,
                    password,
                },
                {
                    headers: {
                        'novi-education-project-id': '3cc8d4cf-96a8-4a9b-b5f8-6e4e00cc1507'
                    }
                }
            );

            navigate('/favorites');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }

    return (
        <>
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
                    {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                    <button type="submit" className="registerbutton" disabled={loading}>
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
        </>
    );
}

export default Register;
