
import { useEffect, useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import api from "../../api/axios.js";

export default function Profile() {
    const { auth } = useAuth();

    return (
        <div>
            <h1>Welkom, {auth.user.email}</h1>
        </div>
    );
}