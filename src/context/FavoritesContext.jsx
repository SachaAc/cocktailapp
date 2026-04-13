import { createContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext.jsx";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);
    const { user } = useAuth();

    // Laad favorites alleen als user is ingelogd
    useEffect(() => {
        if (!user) {
            setFavorites([]);
            return;
        }

        const saved = localStorage.getItem(`favorites_${user.id}`);
        if (saved) {
            try {
                setFavorites(JSON.parse(saved));
            } catch {
                setFavorites([]);
            }
        }
    }, [user]);

    // Sla favorites op per user
    useEffect(() => {
        if (user) {
            localStorage.setItem(`favorites_${user.id}`, JSON.stringify(favorites));
        }
    }, [favorites, user]);

    const toggleFavorite = (drink) => {
        if (!user) {
            alert("Je moet ingelogd zijn om favorieten op te slaan.");
            return;
        }

        const exists = favorites.some(fav => fav.idDrink === drink.idDrink);

        if (exists) {
            setFavorites(favorites.filter(fav => fav.idDrink !== drink.idDrink));
        } else {
            setFavorites([...favorites, drink]);
        }
    };

    const isFavorite = (id) => {
        return favorites.some(fav => fav.idDrink === id);
    };

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}
