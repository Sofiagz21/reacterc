import React from 'react';
import Menu from './components/Menu/menu';


import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="appc">
          <Switch>
          <Menu/>
          </Switch>
      </div>
    </Router>
  );
}

export default App;
