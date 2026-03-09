import './App.css';
import axios from "axios";
import {useState} from "react";
import { Routes, Route } from 'react-router-dom';

import Navigation from "./Pages/Navigation/Navigation.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Cocktailoftheday from "./Pages/Cocktailoftheday/Cocktailoftheday.jsx";
import Discover from "./Pages/Discover/Discover.jsx";
import Detail from "./Pages/Detail/Detail.jsx";
import Favorites from "./Pages/Favorites/Favorites.jsx";
import Register from "./Pages/Register/Register.jsx";


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
                <Route path="/register" element={<Register/>}/>
            </Routes>
            {/* Eventuele footer ... */}
            </>
    )
}

export default App;