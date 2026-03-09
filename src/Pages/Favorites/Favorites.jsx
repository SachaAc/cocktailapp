import axios from 'axios';
import React from "react";

function Favorites() {
    // Hier moeten de favoriete cocktails worden opgehaald met een async await function

    return (
        <>
            <main>

                {/*<div className="cocktailsearchwrapper">*/}
                {/*    {cocktails.map((drink) => (*/}
                {/*        <div className="cocktailsearcharticle" key={drink.idDrink}>*/}
                {/*            <h3 className="cocktailsearchtitle">{drink.strDrink}</h3>*/}
                {/*            <img src={drink.strDrinkThumb} alt={drink.strDrink} className="cocktailsearchimage"/>*/}

                {/*            <p><strong>Ingredients:</strong></p>*/}
                {/*            {[...Array(15)].map((_, i) => {*/}
                {/*                const ing = drink[`strIngredient${i+1}`];*/}
                {/*                const mea = drink[`strMeasure${i+1}`];*/}
                {/*                return ing ? <p key={i}>{mea} {ing}</p> : null;*/}
                {/*            })}*/}

                {/*            <p className="cocktailinfo"><strong>Type of drink:</strong> {drink.strCategory}</p>*/}
                {/*            <p className="cocktailinfo"><strong>Alcoholic?</strong> {drink.strAlcoholic}</p>*/}
                {/*            <p className="cocktailinfo"><strong>Type of glass:</strong> {drink.strGlass}</p>*/}
                {/*            <p className="cocktailinfo"><strong>Recept:</strong> {drink.strInstructions}</p>*/}
                {/*        </div>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </main>
        </>
    )
}

export default Favorites;