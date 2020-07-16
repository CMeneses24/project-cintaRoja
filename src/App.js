import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import MyLogin from './views/Login';
import MyDb from './views/Dashboard'
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
        <Route exact path="/Dashboard">
          <MyDb></MyDb>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
