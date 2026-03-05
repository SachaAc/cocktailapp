import './Cocktailoftheday.css';
import axios from 'axios';

function Cocktailoftheday() {
    // Hier moet een random cocktail worden opgehaald met een async await function

    return (
        <>
            <main className="cockailofthedaywrapper">
                <button type='button' className="cocktailbutton">Get the cocktail of the day</button>
                {/*hier komt een plaatje*/}
            </main>
        </>
    )
}

export default Cocktailoftheday;