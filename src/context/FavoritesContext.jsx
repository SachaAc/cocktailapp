import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext.jsx";

export const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
    const { auth } = useContext(AuthContext);
    const [favorites, setFavorites] = useState([]);

    // ---------------------------
    // LOAD FAVORITES PER USER
    // ---------------------------
    useEffect(() => {
        if (!auth?.user) {
            setFavorites([]);
            return;
        }

        const saved = localStorage.getItem(`favorites_${auth.user.id}`);

        if (saved) {
            setFavorites(JSON.parse(saved));
        }
    }, [auth?.user]);

    // ---------------------------
    // SAVE FAVORITES PER USER
    // ---------------------------
    useEffect(() => {
        if (auth?.user) {
            localStorage.setItem(
                `favorites_${auth.user.id}`,
                JSON.stringify(favorites)
            );
        }
    }, [favorites, auth?.user]);

    // ---------------------------
    // TOGGLE FAVORITE
    // ---------------------------
    function toggleFavorite(drink) {
        if (!auth?.isAuth) {
            alert("Je moet ingelogd zijn om favorieten op te slaan.");
            return;
        }

        const exists = favorites.some((fav) => fav.idDrink === drink.idDrink);

        if (exists) {
            setFavorites(favorites.filter((fav) => fav.idDrink !== drink.idDrink));
        } else {
            setFavorites([...favorites, drink]);
        }
    }

    return (
        <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
            {children}
        </FavoritesContext.Provider>
    );
}
