import React, {useState, useEffect} from "react";
import axios from "axios";
import './Discover.css'

function CocktailSearch() {
    const [cocktails, setCocktails] = useState([]);
    const [searchName, setSearchName] = useState("");
    const [ingredient, setIngredient] = useState("");
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

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

            // Zoek op naam → volledige data
            if (searchName) {
                const res = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`
                );
                drinks = Array.isArray(res.data.drinks) ? res.data.drinks : [];
            }

            // Zoek op ingredient → eerst basisdata, daarna per ID volledige data ophalen
            else if (ingredient) {
                const res = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
                );

                const basicDrinks = Array.isArray(res.data.drinks) ? res.data.drinks : [];

                // Haal volledige details op per cocktail
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
        <>
            <div className="cocktailsearchfield">
                <h2 className="cocktailfinder">Cocktail Finder</h2>

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
            </div>

            <div className="cocktailsearchwrapper">
                {cocktails.map((drink) => (
                    <div className="cocktailsearcharticle" key={drink.idDrink}>
                        <h3 className="cocktailsearchtitle">{drink.strDrink}</h3>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} className="cocktailsearchimage"/>

                        <p><strong>Ingredients:</strong></p>
                        {[...Array(15)].map((_, i) => {
                            const ing = drink[`strIngredient${i+1}`];
                            const mea = drink[`strMeasure${i+1}`];
                            return ing ? <p key={i}>{mea} {ing}</p> : null;
                        })}

                        <p className="cocktailinfo"><strong>Type of drink:</strong> {drink.strCategory}</p>
                        <p className="cocktailinfo"><strong>Alcoholic?</strong> {drink.strAlcoholic}</p>
                        <p className="cocktailinfo"><strong>Type of glass:</strong> {drink.strGlass}</p>
                        <p className="cocktailinfo"><strong>Recept:</strong> {drink.strInstructions}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CocktailSearch;
