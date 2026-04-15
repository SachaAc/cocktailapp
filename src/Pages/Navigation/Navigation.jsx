import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';
import { useAuth } from "../../context/AuthContext.jsx";

function Navigation() {
    const { auth, logout } = useAuth();
    const getClass = ({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link';

    return (
        <nav>
            <ul className="navigationlist">
                <li className="navigationitems">
                    <NavLink
                        to="/"
                        className={getClass}>
                        Home
                    </NavLink>
                </li>
                <li className="navigationitems">
                    <NavLink
                        to="/cocktailoftheday"
                        className={getClass}>
                        Cocktail of the Day
                    </NavLink>
                </li>
                <li className="navigationitems">
                    <NavLink
                        to="/discover"
                        className={getClass}>
                        Discover Cocktails
                    </NavLink>
                </li>
                {auth.isAuth ? (
                    <>
                        <li className="navigationitems">
                            <NavLink
                                to="/profile"
                                className={getClass}>
                                Profile
                            </NavLink>
                        </li>
                <li className="navigationitems">
                    <NavLink
                        to="/favorites"
                        className={getClass}>
                        Favorites
                    </NavLink>
                </li>
                    </>
                    )
                    : (
                        <li className="navigationitems">
                            <NavLink
                                to="/login"
                                className={getClass}>
                                Login
                            </NavLink>
                        </li>
                    )}
            </ul>
        </nav>
    );
}

export default Navigation;