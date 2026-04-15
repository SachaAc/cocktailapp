import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import clouds from "../../assets/clouds.jpg";
import whitesatin from "../../assets/whitesatin.jpg";

function Register() {
    const navigate = useNavigate();
    const { register } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleRegister(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);

        try {
            await register(email, password, username);
            navigate("/login");
        } catch (e) {
            console.error(e);
            setError(true);
        }

        setLoading(false);
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
                        backgroundPosition: "center",
                    }}
                >
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />

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
                            Dit account bestaat al. Probeer een ander emailadres.
                        </p>
                    )}

                    <button type="submit" className="registerbutton" disabled={loading}>
                        Register
                    </button>
                </form>

                <p
                    className="login"
                    style={{
                        backgroundImage: `url(${whitesatin})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    Already have an account? <Link to="/login">Log in here</Link>
                </p>
            </div>
        </main>
    );
}

export default Register;
