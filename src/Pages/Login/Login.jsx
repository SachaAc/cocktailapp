import {useNavigate, Link} from "react-router-dom";
import './Login.css';
import clouds from "../../assets/clouds.jpg";
import whitesatin from "../../assets/whitesatin.jpg";
import {AuthContext} from '../../context/AuthContext.jsx';
import React, {useContext, useState} from 'react';
import axios from "axios";

function Login() {
    const { user, login, logout } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, toggleError] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post(
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

            console.log(result.data);
            login(result.data.accessToken);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

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
                                    id="email"
                                    name="email"
                                    value={email}
                                    placeholder="Email"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    placeholder="Password"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                {error && <p className="error">Combinatie van emailadres en wachtwoord is onjuist</p>}
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
