import React, {useState, useEffect} from "react";
import axios from "axios";

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

            if (searchName) {
                const res = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`
                );
                drinks = Array.isArray(res.data.drinks) ? res.data.drinks : [];
            } else if (ingredient) {
                const res = await axios.get(
                    `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
                );
                drinks = Array.isArray(res.data.drinks) ? res.data.drinks : [];
            } else {
                drinks = [];
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
        <div>
            <h2>Cocktail Finder</h2>
            <label>Name:
                <input
                    type="text"
                    placeholder="Search cocktail name"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            fetchCocktails();
                        }
                    }}
                /></label>

            <label>Ingredient
                <select value={ingredient} onChange={(e) => setIngredient(e.target.value)}>
                    <option value=""></option>
                    <option value="Vodka">Vodka</option>
                    <option value="Gin">Gin</option>
                    <option value="Rum">Rum</option>
                    <option value="Tequila">Tequila</option>
                </select></label>

            <br/><br/>
            <button onClick={fetchCocktails} disabled={loading}>
                {loading ? "Loading..." : "Search"}
            </button>
            <button onClick={resetFilters}>Reset</button>

            <hr/>

            {cocktails.length === 0 && !loading && <p>No cocktails found</p>}

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill,minmax(200px,1fr))",
                    gap: "20px",
                }}
            >
                {cocktails.map((drink) => (
                    <div
                        key={drink.idDrink}
                        style={{border: "1px solid #ccc", padding: "10px"}}
                    >
                        <h3>{drink.strDrink}</h3>
                        <img src={drink.strDrinkThumb} alt={drink.strDrink} width="150"/>

                        <p><strong>Ingredients: </strong></p>
                        <p>{drink.strMeasure1} {drink.strIngredient1}</p>
                        <p>{drink.strMeasure2} {drink.strIngredient2}</p>
                        <p>{drink.strMeasure3} {drink.strIngredient3}</p>
                        <p>{drink.strMeasure4} {drink.strIngredient4}</p>
                        <p>{drink.strMeasure5} {drink.strIngredient5}</p>
                        <p>{drink.strMeasure6} {drink.strIngredient6}</p>
                        <p>{drink.strMeasure7} {drink.strIngredient7}</p>
                        <p>{drink.strMeasure8} {drink.strIngredient8}</p>
                        <p>{drink.strMeasure9} {drink.strIngredient9}</p>
                        <p>{drink.strMeasure10} {drink.strIngredient10}</p>
                        <p>{drink.strMeasure11} {drink.strIngredient11}</p>
                        <p>{drink.strMeasure12} {drink.strIngredient12}</p>
                        <p>{drink.strMeasure13} {drink.strIngredient13}</p>
                        <p>{drink.strMeasure14} {drink.strIngredient14}</p>
                        <p>{drink.strMeasure15} {drink.strIngredient15}</p>

                        <p><strong>Type of drink: </strong>{drink.strCategory}</p>
                        <p><strong>Alcoholic? </strong>{drink.strAlcoholic}</p>
                        <p><strong>Type of glass: </strong>{drink.strGlass}</p>

                        <p><strong>Recept: </strong>{drink.strInstructions}</p>

                    </div>
                ))}
            </div>
        </div>
    );
}

export default CocktailSearch;
