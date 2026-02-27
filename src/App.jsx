import './App.css';
import worldmap from "./assets/world_map.png";
import axios from "axios";
import {useState} from "react";
import Searcher from "./searcher.jsx";


function App() {
    const [country, setCountry] = useState([]);
    const [error, toggleError] = useState(false);
    const [showButton, setShowButton] = useState(true);

    async function allCountries() {
        try {
            toggleError(false);
            const response = await axios.get("https://restcountries.com/v3.1/all?fields=name,population,flags,cca3");
            console.log(response.data);
            setCountry(response.data);
            setShowButton(false);
        } catch (e) {
            console.error(e);
            toggleError(true);
        }
    }

    function getRegionColor(region) {
        switch (region) {
            case "Africa":
                return "blue";
            case "Americas":
                return "green";
            case "Asia":
                return "red";
            case "Europe":
                return "yellow";
            case "Oceania":
                return "purple";
            default:
                return "gray";
        }
    }

    return (<>
        <div className="header">
            <img className="worldmap" src={worldmap}/>
            <h1>World Regions</h1>
            {showButton && (
                <button onClick={allCountries}> Load countries </button>)}
            {error && <p>Er is iets misgegaan</p>}
            <ul>
                {[...country]
                    .sort((a, b) => a.population - b.population)
                    .map((item) => (
                        <li>
                            <img width="40" src={item.flags.png}/>
                            <span style={{color: getRegionColor(item.region)}}>
          {item.name.common}
        </span>
                            <p>Has a population of {item.population} people</p>
                        </li>
                    ))}
            </ul>
        </div>

        <Searcher />
    </>);
}

export default App;