import React, {Component} from "react";
import "../App.css";
import {Link,Router} from "react-router-dom";

class login extends Component{
  render(){
    return(
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Login</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="username">
              <label htmlFor="username">
                Username
              </label>
              <input className="" placeholder="Username" type="text" name="username" noValidate onChange={this.handleChange} />
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input className="" placeholder="Password" type="password" name="password" novalidate onChange={this.handleChange} />
            </div>
            <div className="login">
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default login;