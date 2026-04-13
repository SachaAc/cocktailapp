import api from "../api/axios";

export const addFavorite = async (cocktail, userId) => {
    return await api.post("/api/favorites", {
        idDrink: cocktail.idDrink,
        strDrink: cocktail.strDrink,
        strDrinkThumb: cocktail.strDrinkThumb,
        userId: userId
    });
};

export const getFavorites = async () => {
    const res = await api.get("/api/favorites");
    return res.data;
};

export const deleteFavorite = async (id) => {
    return await api.delete(`/api/favorites/${id}`);
};
