import React from 'react';
import "./Login.css";

function Login() {
    return(
        <div className="login">
        <p>Login to access the full dashboard</p>
        <label htmlfor="email">email:</label>
        <input id="email" type="email"/>
        <label htmlfor="password">Password</label>
        <input id="password" type="password"/>
        <button>OK</button>
      </div>
    );
}
export default Login;