import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css';

function Navigation() {

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
                        to="/login"
                        className={getClass}>
                        Login
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
                <li className="navigationitems">
                    <NavLink
                        to="/detail"
                        className={getClass}>
                        Cocktail Details
                    </NavLink>
                </li>
                <li className="navigationitems">
                    <NavLink
                        to="/favorites"
                        className={getClass}>
                        Favorites
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;