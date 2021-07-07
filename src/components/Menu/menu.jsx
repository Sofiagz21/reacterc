import React from 'react';
import Home from '../../pages/Home'
import Colaboradoras from '../../pages/Colaboradoras'

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    NavLink,
  } from "react-router-dom";

import '../../utils/css/menu/stylesMenu.css'

const menu = () => {
    return (
        <Router>
        <header className="MenuNav">
            <input type="checkbox" id="btn-menu"></input>
            <label for="btn-menu"><i class="fa fa-bars" aria-hidden="true"></i></label>
            <nav className="Navbar">
                <ul className="List">
                    <Link to="/" className="LiMenu"  activeClassName="active">
                        INICIO
                    </Link>
                    <NavLink to="/Colaboradoras" className="LiMenu" activeClassName="active">
                        COLABORADORAS
                    </NavLink>
                </ul>
            </nav>
        </header>
        <Switch>
        {/* path que me corrige que la primera ruta sea el Home*/}
        <Route path="/reacterc" exact component={Home}/>
          <Route path="/" exact component={Home}/>
          </Switch>
        </Router>
    )
}

export default menu