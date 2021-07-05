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
import '../../pages/Colaboradoras'
import '../../utils/css/menu/stylesMenu.css'

const menu = () => {
    return (
        <Router>
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
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/Colaboradoras" exact component={Colaboradoras}/>
          </Switch>
        </Router>
    )
}

export default menu