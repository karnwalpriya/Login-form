import React ,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';

class App extends Component{
  render(){
    return(
      <Router>
      <h1> HELLO </h1>
        <div className="App">
          <ul className="App-header">
            <li>
              <link to="/">Login</link>
            </li>
            <li>
              <link to="/register">Register</link>
            </li>
          </ul>
          <switch>
            <Route exact path='/' component={Login}></Route>
            <Route exact path='/register' component={Register}></Route>
          </switch>
        </div>
      </Router>
    );
  }
}
export default App;