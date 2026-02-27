import axios from "axios";
import {useState} from "react";
import './searcher.css';

function Search() {
    const [countryInfo, setCountryInfo] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(false);

    function toMillions(number) {
        return (number / 1_000_000).toFixed(1);
    }

    async function handleSearch(e) {
        e.preventDefault();
        setError(false);

        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${searchTerm}`);
            setCountryInfo(response.data[0]);
            setSearchTerm("");

        } catch (e) {
            setError(`${searchTerm} bestaat niet. Probeer het opnieuw.`);
            setSearchTerm("");
        }
    }

    return (
        <>
            <span className="wrapper">
                            <h1>Search country information</h1>
                <form onSubmit={handleSearch}>
                <input type="text" placeholder="Bijvoorbeeld Nederland of Peru" value={searchTerm}
                       onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button type="submit">Zoek</button>
            </form>
                    {error && <p style={{color: "red"}}>{error}</p>}
                    {countryInfo && (<>
                        <h2>
                            <img src={countryInfo.flags.png} width="60"/>{" "}
                            {countryInfo.name.common}
                        </h2>
                        <p> {countryInfo.name.common} is situated in {countryInfo.subregion} and the capital
                            is {countryInfo.capital[0]}. </p>
                        <p> It has a population
                            of {toMillions(countryInfo.population)} million people and it borders
                            with {countryInfo.borders?.length || 0} neighboring countries. </p>
                    </>)}
                </span>
        </>);
}

export default Search;