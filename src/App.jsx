import './App.css';
import axios from "axios";
import {useState} from "react";
import { Routes, Route, Navigate } from 'react-router-dom';

import Navigation from "./Pages/Navigation/Navigation.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Cocktailoftheday from "./Pages/Cocktailoftheday/Cocktailoftheday.jsx";
import Discover from "./Pages/Discover/Discover.jsx";
import Favorites from "./Pages/Favorites/Favorites.jsx";
import Register from "./Pages/Register/Register.jsx";


function App() {
    const isLoggedIn = false;

    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cocktailoftheday" element={<Cocktailoftheday/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/favorites" element={isLoggedIn === true ? <Favorites/> : <Navigate to="/"/>}/>
                <Route path="/register" element={<Register/>}/>
            </Routes>
            {/* Eventuele footer ... */}
            </>
    )
}

export default App;