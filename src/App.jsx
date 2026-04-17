import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Navigation from "./Pages/Navigation/Navigation.jsx";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Cocktailoftheday from "./Pages/Cocktailoftheday/Cocktailoftheday.jsx";
import Discover from "./Pages/Discover/Discover.jsx";
import Favorites from "./Pages/Favorites/Favorites.jsx";
import Register from "./Pages/Register/Register.jsx";
import Details from "./Pages/Details/Details.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import { useAuth } from "./context/AuthContext.jsx";


function App() {
    const { auth } = useAuth();

    return (
        <>
            <Navigation/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cocktailoftheday" element={<Cocktailoftheday/>}/>
                <Route path="/discover" element={<Discover/>}/>
                <Route path="/cocktail/:id" element={<Details/>}/>
                <Route
                    path="/favorites"
                    element={
                        auth.isAuth ? <Favorites/> : <Navigate to="/login"/>
                    }
                />
                <Route
                    path="/profile"
                    element={
                        auth.isAuth ? <Profile/> : <Navigate to="/login"/>
                    }
                />
                <Route path="/register" element={<Register/>}/>
            </Routes>
        </>
    )
}

export default App;