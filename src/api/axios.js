import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "X-Api-Key": import.meta.env.VITE_API_KEY,
        "Content-Type": "application/json"
    }
});

instance.interceptors.request.use((config) => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user?.accessToken) {
        config.headers["Authorization"] = `Bearer ${user.accessToken}`;
    }

    return config;
});

export default instance;
