import React from "react";

export class Login extends React.Component{
  //eslint-disable-next-line
    constructor(props){
        super (props);
    }

render() {
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1><b>Login</b></h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">First Name</label>
              <input
                className=""
                placeholder="First Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              
            </div>
            <div className="lastName">
              <label htmlFor="lastName">Last Name</label>
              <input
              className=""
              placeholder="Last Name"
              type="text"
              name="lastName"
              noValidate
              onChange={this.handleChange}
            />
            
          </div>
          <div className="email">
            <label htmlFor="email">Email</label>
            <input
              className=""
              placeholder="Email"
              type="email"
              name="email"
              noValidate
              onChange={this.handleChange}
            />
            
          </div>
          <div className="password">
            <label htmlFor="password">Password</label>
            <input
              className=""
              placeholder="Password"
              type="password"
              name="password"
              noValidate
              onChange={this.handleChange}
            />
            
          </div>
          <div className="footer">
              <button type="button" className="btn">
                  Login
              </button>
          </div>
        </form>
      </div>
    </div>
  );
}
}

