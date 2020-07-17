import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home';
import MyLogin from './views/Login';
import MyRegister from './views/Register';
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
        <Route exact path="/">
          <MyDb></MyDb>
        </Route>
        <Route exact path="/Fail">
          <p>Login Failed</p>
        </Route>
        <Route exact path="/Register">
        <MyRegister></MyRegister>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
