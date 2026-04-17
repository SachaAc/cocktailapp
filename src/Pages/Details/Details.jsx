import './Details.css';
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import whitesatin from "../../assets/whitesatin.jpg";
import favorite from "../../assets/favorite.png";
import favoriteRed from "../../assets/favorite-red.png";

function CocktailDetails() {
    const { id } = useParams();
    const [cocktail, setCocktail] = useState(null);

    // const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

    useEffect(() => {
        async function fetchCocktail() {
            const res = await axios.get(
                `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
            );
            setCocktail(res.data.drinks[0]);
        }
        fetchCocktail();
    }, [id]);

    if (!cocktail) return <p>Loading...</p>;

    return (
        <div className="cocktaildetails-wrapper">
        <article
            className="cocktaildetails"
            style={{
                backgroundImage: `url(${whitesatin})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
        >
            <h2>{cocktail.strDrink}</h2>

            <img className="cocktailimage"
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
            />

            <img
                className="favorite"
                src={isFavorite(cocktail.idDrink) ? favoriteRed : favorite}
                alt="favorite"
                onClick={() => toggleFavorite(cocktail)}
                style={{ cursor: "pointer" }}
            />

            <p><strong>Ingredients:</strong></p>
            {[...Array(15)].map((_, i) => {
                const ing = cocktail[`strIngredient${i + 1}`];
                const mea = cocktail[`strMeasure${i + 1}`];
                return ing ? <p key={i}>{mea} {ing}</p> : null;
            })}

            <p><strong>Instructions:</strong> {cocktail.strInstructions}</p>
        </article>
        </div>
    );
}

export default CocktailDetails;
