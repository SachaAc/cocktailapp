import axios from "./axios";

export const addFavorite = async (cocktail) => {
    return await axios.post("/favorites", cocktail);
};

export const getFavorites = async () => {
    const res = await axios.get("/favorites");
    return res.data;
};