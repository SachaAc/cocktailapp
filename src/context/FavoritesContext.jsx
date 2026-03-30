import { createContext, useEffect, useState } from "react";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    // Load from localStorage
    useEffect(() => {
        const saved = localStorage.getItem("favorites");
        if (saved) {
            try {
                setFavorites(JSON.parse(saved));
            } catch {
                setFavorites([]);
            }
        }
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [favorites]);

    const toggleFavorite = (drink) => {
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
