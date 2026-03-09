import './Cocktailoftheday.css';
import axios from 'axios';
import React, {useState} from "react";

function Cocktailoftheday() {
    const [cocktail, setCocktail] = useState(null);
    const [clicked, setClicked] = useState(false);

    async function getRandomCocktail() {
        try {
            const response = await axios.get("https://www.thecocktaildb.com/api/json/v1/1/random.php");
            setCocktail(response.data.drinks[0]);
            setClicked(true);
        } catch (error) {
            console.error("Fout bij ophalen cocktail:", error);
        }
    }

    return (
        <span className="cocktailofthedaywrapper">
            {!clicked && (
            <button onClick={getRandomCocktail} className="cocktailofthedaybutton">Get the cocktail of the day!</button>
            )}

            {cocktail && (
                <article className="cocktailcard">
                    <h2>{cocktail.strDrink}</h2>
                    <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="cocktailofthedayimage"/>
                    <p><strong>Ingredients: </strong></p>
                    <p>{cocktail.strMeasure1} {cocktail.strIngredient1}</p>
                    <p>{cocktail.strMeasure2} {cocktail.strIngredient2}</p>
                    <p>{cocktail.strMeasure3} {cocktail.strIngredient3}</p>
                    <p>{cocktail.strMeasure4} {cocktail.strIngredient4}</p>
                    <p>{cocktail.strMeasure5} {cocktail.strIngredient5}</p>
                    <p>{cocktail.strMeasure6} {cocktail.strIngredient6}</p>
                    <p>{cocktail.strMeasure7} {cocktail.strIngredient7}</p>
                    <p>{cocktail.strMeasure8} {cocktail.strIngredient8}</p>
                    <p>{cocktail.strMeasure9} {cocktail.strIngredient9}</p>
                    <p>{cocktail.strMeasure10} {cocktail.strIngredient10}</p>
                    <p>{cocktail.strMeasure11} {cocktail.strIngredient11}</p>
                    <p>{cocktail.strMeasure12} {cocktail.strIngredient12}</p>
                    <p>{cocktail.strMeasure13} {cocktail.strIngredient13}</p>
                    <p>{cocktail.strMeasure14} {cocktail.strIngredient14}</p>
                    <p className="cocktailinfo">{cocktail.strMeasure15} {cocktail.strIngredient15}</p>

                    <p className="cocktailinfo"><strong>Type of drink: </strong>{cocktail.strCategory}</p>
                    <p className="cocktailinfo"><strong>Alcoholic? </strong>{cocktail.strAlcoholic}</p>
                    <p className="cocktailinfo"><strong>Type of glass: </strong>{cocktail.strGlass}</p>

                    <p className="cocktailinfo"><strong>Recept: </strong>{cocktail.strInstructions}</p>
                </article>
            )}
        </span>
    );
}

export default Cocktailoftheday;