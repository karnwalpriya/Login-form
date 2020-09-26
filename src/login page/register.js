import React from "react";

export class Register extends React.Component{

render(){
    return(
        <div className="wrapper">
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img url="https://th.bing.com/th/id/OIP.vkQOKlGMvDylxMhub_01mwHaEK?pid=Api&rs=1)" alt="" />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" />
                    </div>
                </div>
            </div>
            <div className="signin">
                <button type="button" className="btn">
                    Register
                </button>
            </div>
        </div>
    );
} 
}