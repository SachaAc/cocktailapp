import React, { useContext } from "react";
import whitesatin from "../../assets/whitesatin.jpg";
import favoriteRed from "../../assets/favorite-red.png";

// ⭐ Import FavoritesContext
import { FavoritesContext } from "../../context/FavoritesContext";

function Favorites() {
    // ⭐ Haal favorieten en functies uit context
    const { favorites, toggleFavorite } = useContext(FavoritesContext);

    return (
        <main>
            <h2 style={{ textAlign: "center" }}>My Favorite Cocktails</h2>

            {favorites.length === 0 && (
                <p style={{ textAlign: "center" }}>You have no favorite cocktails yet.</p>
            )}

            <div className="cocktailsearchwrapper">
                {favorites.map((drink) => (
                    <div className="cocktailsearcharticle" key={drink.idDrink}
                         style={{
                             backgroundImage: `url(${whitesatin})`,
                             backgroundSize: "cover",
                             backgroundPosition: "center"
                         }}>
                        <h3 className="cocktailsearchtitle">{drink.strDrink}</h3>

                        <img
                            src={drink.strDrinkThumb}
                            alt={drink.strDrink}
                            className="cocktailsearchimage"
                        />

                        {/* ⭐ Verwijder-knop (altijd rood hartje) */}
                        <img
                            className="favorite"
                            src={favoriteRed}
                            alt="remove favorite"
                            onClick={() => toggleFavorite(drink)}
                            style={{ cursor: "pointer" }}
                        />

                        <p><strong>Ingredients:</strong></p>
                        {[...Array(15)].map((_, i) => {
                            const ing = drink[`strIngredient${i + 1}`];
                            const mea = drink[`strMeasure${i + 1}`];
                            return ing ? <p key={i}>{mea} {ing}</p> : null;
                        })}

                        <p className="cocktailinfo"><strong>Type of drink:</strong> {drink.strCategory}</p>
                        <p className="cocktailinfo"><strong>Alcoholic?</strong> {drink.strAlcoholic}</p>
                        <p className="cocktailinfo"><strong>Type of glass:</strong> {drink.strGlass}</p>
                        <p className="cocktailinfo"><strong>Recept:</strong> {drink.strInstructions}</p>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default Favorites;
