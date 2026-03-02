import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    function handleLogin(e) {
        e.preventDefault(); // login logica...
        navigate("/"); // stuur naar home }


        return (
            <>
                <h1>Login</h1>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Wachtwoord"/>
                    <button type="submit">Inloggen</button>
                </form>

                <p>Nog geen account? <Link to="/register">Registreer hier</Link></p>
            </>
        );
    }

    export default Login;