import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import clouds from "../../assets/clouds.jpg";
import whitesatin from "../../assets/whitesatin.jpg";

function Login() {
    const { auth, login } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);

        try {
            await login(email, password);
            navigate("/profile");
        } catch (e) {
            console.error(e);
            setError(true);
        }
    }

    return (
        <main>
            <div className="loginwrapper">
                {!auth.isAuth && (
                    <>
                        <form
                            onSubmit={handleSubmit}
                            className="loginform"
                            style={{
                                backgroundImage: `url(${clouds})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        >
                            <input
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />

                            <input
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />

                            {error && (
                                <p className="error">
                                    Combinatie van emailadres en wachtwoord is onjuist
                                </p>
                            )}

                            <button type="submit" className="loginbutton">
                                Log in
                            </button>
                        </form>

                    {user && (
                        <div style={{ textAlign: "center", marginTop: "20px" }}>
                            <button onClick={logout} className="loginbutton">
                                Log uit
                            </button>
                        </div>
                    )}

                </div>
            </main>
        </>
    );
}

export default Login;
