import './Home.css';
import axios from 'axios';
import homepage from '../../assets/homepage.jpg';

function Home() {


    return (
        <>
            <main className="homepagewrapper">
                <img src={homepage} alt="Cocktail" className="cocktailhomepage"/>
            </main>
        </>
    )
}

export default Home;