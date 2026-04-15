import { useAuth } from "../../context/AuthContext.jsx";

export default function Profile() {
    const { auth } = useAuth();

    return (
        <div>
            <h1>Welkom, {auth.user.email}</h1>
        </div>
    );
}