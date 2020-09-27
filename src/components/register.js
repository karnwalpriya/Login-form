import React, {Component} from "react";
import {Link,Route,Router} from "react-router-dom";

class Register extends Component{
    render(){
        return(
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1>Register</h1>
                    <form onSubmit={this.handleSumit} novalidate>
                    <div className="firstname">
                            <label htmlfor="firstname">First Name</label>
                            <input className="" placeholder="First Name" type="text" name="firstname" novalidate onChange={this.handleChange} />
                        </div>
                        <div className="lastname">
                            <label htmlfor="lastname">Last Name</label>
                            <input className="" placeholder="Last Name" type="text" name="lastname" novalidate onChange={this.handleChange} />
                        </div>
                        <div className="email">
                            <label htmlfor="email">Email</label>
                            <input className="" placeholder="Email" type="Email" name="email" novalidate onChange={this.handleChange} />
                        </div>
                        <div className="password">
                            <label htmlfor="password">Password</label>
                            <input className="" placeholder="Password" type="password" name="password" novalidate onChange={this.handleChange} />
                        </div>
                        <div className="register">
                            <button type="submit">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;