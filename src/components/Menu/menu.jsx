import React from 'react';
import Home from '../../pages/Home' /* SE IMPORTA EL COMPONENTE DE LA PÁGINA HOME*/
import Colaboradoras from '../../pages/Colaboradoras' /* SE IMPORTA EL COMPONENTE DE LA PÁGINA COLABORADORAS*/
/* SE IMPORTA EL CONTENIDO PARA REALIZAR MENU DOM QUE REDIRECCIONE A LA DEMAS PÁGINAS*/
import{
    BrowserRouter as Router,
    Switch,
    Route, 
    Link,
    NavLink,
  } from "react-router-dom";

  /* SE IMPORTAN LOS ESTILOS DEL MENU*/
import '../../utils/css/menu/stylesMenu.css'

const menu = () => {
    return (
        <Router>
            {/*contenido del menú*/}
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

        {/*RUTA QUE ME REDIRECCIONE PARA LA PÁGINA HOME*/}
          <Route path="/" exact component={Home}/>
          
          {/*RUTA QUE ME REDIRECCIONE PARA LA PÁGINA COLABORADORAS*/}
          <Route path="/Colaboradoras" exact component={Colaboradoras}/>
          </Switch>
        </Router>
    )
}
export default menu