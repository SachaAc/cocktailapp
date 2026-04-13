import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext.jsx";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    const { auth } = useAuth();

    // Load favorites per user
    useEffect(() => {
        if (!auth.user) {
            setFavorites([]);
            return;
        }

        const saved = localStorage.getItem(`favorites_${auth.user.id}`);
        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, [auth.user]);

    // Save favorites per user
    useEffect(() => {
        if (auth.user) {
            localStorage.setItem(
                `favorites_${auth.user.id}`,
                JSON.stringify(favorites)
            );
        }
    }, [favorites, auth.user]);

    const toggleFavorite = (drink) => {
        if (!auth.isAuth) {
            alert("Je moet ingelogd zijn om favorieten op te slaan.");
            return;
        }

        const exists = favorites.some((fav) => fav.idDrink === drink.idDrink);

        if (exists) {
            setFavorites(favorites.filter((fav) => fav.idDrink !== drink.idDrink));
        } else {
            setFavorites([...favorites, drink]);
        }
    };

    const isFavorite = (id) => {
        return favorites.some((fav) => fav.idDrink === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}
