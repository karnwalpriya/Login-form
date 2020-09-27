import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

function Nav(){
    return(
        <nav>
            <h1>Welcome</h1>
            <ul className="Nav-links">
                <link to='/login'>
                <li>Login</li>
                </link>
                <link to='/register'>
                <li>Register</li>
                </link>>
            </ul>
        </nav>
    );
}

export default Nav;