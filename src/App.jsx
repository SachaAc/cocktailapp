import './App.css';
import axios from "axios";
import {useState} from "react";
import { Routes, Route } from 'react-router-dom';
import Navigation from "./Pages/Navigation/Navigation.jsx";


function App() {


    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cocktailoftheday" element={<Cocktailoftheday/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
            </Routes>
            {/* Eventuele footer ... */}
    )
}

export default App;