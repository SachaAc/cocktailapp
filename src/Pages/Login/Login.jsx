import { useNavigate, Link } from "react-router-dom";
import './Login.css'

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
                <input type="password" placeholder="Wachtwoord" />
                <button type="submit" className="loginbutton">Inloggen</button>
            </form>

            <p className="register">
                Nog geen account? <Link to="/register">Registreer hier</Link>
            </p>
                </div>
            </main>
        </>
    );
}

export default Login