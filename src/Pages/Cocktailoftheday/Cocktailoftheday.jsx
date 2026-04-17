import './Cocktailoftheday.css';
import axios from "axios";
import { useState } from "react";
import clouds from '../../assets/clouds.jpg';
import whitesatin from '../../assets/whitesatin.jpg';
import favorite from "../../assets/favorite.png";
import favoriteRed from "../../assets/favorite-red.png";

function Cocktailoftheday() {
    const [cocktail, setCocktail] = useState(null);
    const [clicked, setClicked] = useState(false);
    // const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

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
                <button
                    onClick={getRandomCocktail}
                    className="cocktailofthedaybutton"
                    style={{
                        backgroundImage: `url(${clouds})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                >
                    Get the cocktail of the day!
                </button>
            )}

            {cocktail && (
                <article className="cocktailcard"
                         style={{
                             backgroundImage: `url(${whitesatin})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center"
                         }}>
                    <h2>{cocktail.strDrink}</h2>

                    <img
                        src={cocktail.strDrinkThumb}
                        alt={cocktail.strDrink}
                        className="cocktailofthedayimage"
                    />

                    <img
                        className="favorite"
                        src={isFavorite(cocktail.idDrink) ? favoriteRed : favorite}
                        alt="favorite"
                        onClick={() => toggleFavorite(cocktail)}
                        style={{ cursor: "pointer" }}
                    />

                    <p><strong>Ingredients: </strong></p>
                    {[...Array(15)].map((_, i) => {
                        const ing = cocktail[`strIngredient${i + 1}`];
                        const mea = cocktail[`strMeasure${i + 1}`];
                        return ing ? <p key={i}>{mea} {ing}</p> : null;
                    })}

                    <p className="cocktailinfo"><strong>Type of drink: </strong>{cocktail.strCategory}</p>
                    <p className="cocktailinfo"><strong>Alcoholic? </strong>{cocktail.strAlcoholic}</p>
                    <p className="cocktailinfo"><strong>Type of glass: </strong>{cocktail.strGlass}</p>
                    <p className="cocktailinfo"><strong>Recept: </strong>{cocktail.strInstructions}</p>

                    {/* ⭐ RANDOM AGAIN KNOP */}
                    <button
                        onClick={getRandomCocktail}
                        className="cocktailofthedaybutton"
                        style={{
                            backgroundImage: `url(${clouds})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            marginTop: "20px"
                        }}
                    >
                        Another cocktail please!
                    </button>
                </
                article>
            )}
        </span>
    );
}

export default Cocktailoftheday;
