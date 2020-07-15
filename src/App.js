import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import MyLogin from './views/Login';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/Home">
          <Home></Home>
        </Route>
        <Route exact path="/Login">
          <MyLogin></MyLogin>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
