import axios from "axios";

const BASE = "https://www.thecocktaildb.com/api/json/v1/1";

export async function getCategories() {
    const res = await axios.get(`${BASE}/list.php?c=list`);
    return res.data.drinks;
}

export async function getByCategory(category) {
    const res = await axios.get(`${BASE}/filter.php?c=${category}`);
    return res.data.drinks;
}

export async function getCocktail(id) {
    const res = await axios.get(`${BASE}/lookup.php?i=${id}`);
    return res.data.drinks[0];
}
