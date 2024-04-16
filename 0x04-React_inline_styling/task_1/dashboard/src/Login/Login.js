import React from 'react';
import { StyleSheet, css } from "aphrodite";


function Login() {
  return (
    <React.Fragment>
      <div className={css(styles.login)}>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" className={css(styles.loginInput)} />
        <button>OK</button>
      </div>
    </React.Fragment>
  )
}

const root = {
  holbertonRed: "#e1484c",
}

const styles = StyleSheet.create({
  login: {
    padding: "36px 24px",

  },
  loginInput: {
    margin: "0 16px 0 8px",
  }
})
export default Login;
