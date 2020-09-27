import React ,{ Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import login from './components/login';
import register from './components/register';

class App extends Component{
  render(){
    return(
      <Router>
      <h1> HELLO </h1>
        <div className="App">
          <ul className="App-header">
            <li>
              <link to="/login">Login</link>
            </li>
            <li>
              <link to="/register">Register</link>
            </li>
          </ul>
          <switch>
            <Route exact path='/login' component={login}></Route>
            <Route exact path='/register' component={register}></Route>
          </switch>
        </div>
      </Router>
    );
  }
}
export default App;