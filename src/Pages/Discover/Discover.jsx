import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import './Discover.css';
import clouds from "../../assets/clouds.jpg";
import whitesatin from "../../assets/whitesatin.jpg";
import favorite from "../../assets/favorite.png";
import favoriteRed from "../../assets/favorite-red.png";

function CocktailSearch() {
    const [cocktails, setCocktails] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [loading, setLoading] = useState(false);

    const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const res = await axios.get(
                "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
            );
            setCategories(res.data.drinks || []);
        } catch (err) {
            console.error("Error fetching categories:", err);
        }
    };

    const fetchCocktails = async () => {
        setLoading(true);

        try {
            let drinks = [];

            if (searchName) {
                const res = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`
                );
                drinks = Array.isArray(res.data.drinks) ? res.data.drinks : [];
            }

            else if (ingredient) {
                const res = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
                );

                const basicDrinks = Array.isArray(res.data.drinks) ? res.data.drinks : [];

                const fullDrinks = await Promise.all(
                    basicDrinks.map(async (drink) => {
                        const detailRes = await axios.get(
                            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drink.idDrink}`
                        );
                        return detailRes.data.drinks ? detailRes.data.drinks[0] : null;
                    })
                );

                drinks = fullDrinks.filter(Boolean);
            }

            setCocktails(drinks);
        } catch (err) {
            console.error("Error fetching cocktails:", err);
            setCocktails([]);
        }

        setLoading(false);
    };

    const resetFilters = () => {
        setSearchName("");
        setIngredient("");
        setCocktails([]);
    };

    return (
        <main>
            <div className="cocktailsearchfieldwrapper"
                 style={{
                     backgroundImage: `url(${clouds})`,
                     backgroundSize: "cover",
                     backgroundPosition: "center"
                 }}>
                <h2 className="cocktailfinder">Cocktail Finder</h2>

                <span className="cocktailsearchfield">
                    <label>Name:
                        <input
                            type="text"
                            placeholder="Search cocktail name"
                            value={searchName}
                            onChange={(e) => setSearchName(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && fetchCocktails()}
                        />
                    </label>

                    <label>Ingredient
                        <select
                            value={ingredient}
                            onChange={(e) => setIngredient(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && fetchCocktails()}
                        >
                            <option value=""></option>
                            <option value="Vodka">Vodka</option>
                            <option value="Gin">Gin</option>
                            <option value="Rum">Rum</option>
                            <option value="Tequila">Tequila</option>
                        </select>
                    </label>

                    <button onClick={fetchCocktails} disabled={loading}>
                        {loading ? "Loading..." : "Search"}
                    </button>
                    <button onClick={resetFilters}>Reset</button>

                    {cocktails.length === 0 && !loading && <p>No cocktails found</p>}
                </span>
            </div>

            <div className="cocktailsearchwrapper">
                {cocktails.map((drink) => (
                    <div className="cocktailsearcharticle" key={drink.idDrink}
                         style={{
                             backgroundImage: `url(${whitesatin})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center"
                         }}>

                        <Link to={`/cocktail/${drink.idDrink}`}>
                            <h3 className="cocktailsearchtitle">{drink.strDrink}</h3>
                        </Link>

                        <Link to={`/cocktail/${drink.idDrink}`}>
                            <img
                                src={drink.strDrinkThumb}
                                alt={drink.strDrink}
                                className="cocktailsearchimage"
                            />
                        </Link>

                        <img
                            className="favorite"
                            src={isFavorite(drink.idDrink) ? favoriteRed : favorite}
                            alt="favorite"
                            onClick={() => toggleFavorite(drink)}
                            style={{ cursor: "pointer" }}
                        />
                    </div>
                ))}
            </div>
        </main>
    );
}

export default CocktailSearch;
