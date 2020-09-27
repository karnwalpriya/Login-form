import React ,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Nav from './components/nav';

function App(){
  return(
    <Router>
    <div className="App">
      <Nav />
      <switch>
      <Route path="/" exact component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      </switch>
    </div>
    </Router>
  );
}

const Home= () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export defaultStatus App;