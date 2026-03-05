import './Cocktailoftheday.css';
import axios from 'axios';
import {useState} from "react";

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
                    <p><strong>Recept:</strong> {cocktail.strInstructions}</p>
                </article>
            )}
        </span>
    );
}

export default Cocktailoftheday;