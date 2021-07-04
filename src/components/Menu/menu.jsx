import React from 'react';
import {
    Link,
    NavLink,
} from "react-router-dom";
import '../../utils/css/menu/stylesMenu.css'

const menu = () => {
    return (
        <header className="MenuNav">
            <input type="checkbox" id="btn-menu"></input>
            <label for="btn-menu"><i class="fa fa-bars" aria-hidden="true"></i></label>
            <nav className="Navbar">
                <ul className="List">
                    <Link to="/" className="LiMenu">
                        INICIO
                    </Link>
                    <NavLink to="/Colaboradoras" className="LiMenu" activeClassName="active">
                        COLABORADORAS
                    </NavLink>
                </ul>
            </nav>
        </header>
    )
}

export default menu



