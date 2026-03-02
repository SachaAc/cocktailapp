import React from 'react';
import {NavLink} from 'react-router-dom';

function Navigation() {

    const getClass = ({ isActive }) => isActive ? 'active-menu-link' : 'default-menu-link';

    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={getClass}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/login"
                        className={getClass}>
                        Login
                    < /NavLink>
                </li>
                <li>
                    <NavLink
                        to="/cocktailoftheday"
                        className={getClass}>
                        Cocktail of the day
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/discover"
                        className={getClass}>
                        Discover Cocktails
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/detail"
                        className={getClass}>
                        Cocktail details
                    </NavLink>
                </li>
                <li>
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