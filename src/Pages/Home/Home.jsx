import './Home.css';
import axios from 'axios';
import homepage from '../../assets/homepage.jpg';

function Home() {


    return (
        <>
            <main className="homepagewrapper">
                <h1 className="titlepage">World of Cocktails</h1>
                <img src={homepage} alt="Cocktail" className="cocktailhomepage"/>
            </main>
        </>
    )
}

export default Home;