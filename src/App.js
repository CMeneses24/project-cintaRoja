import React from 'react';
import './App.css';
import Home from './views/Home';
import MyLogin from './views/Login';
import MyDb from './views/Dashboard'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import MyWelcome from './views/Welcome';



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
        <Route exact path="/">
          <MyWelcome></MyWelcome>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
