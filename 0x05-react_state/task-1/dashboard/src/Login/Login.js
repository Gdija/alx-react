import React, {Component} from "react";
import { StyleSheet, css } from "aphrodite";


class Login extends Component{
  constructor(props){
    super(props);
    this.state={
      email: '',
      password: '',
      enableSubmit: false,
      isLoggedIn : false,
    };
    this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  handleLoginSubmit(event) {
    event.preventDefault();
    this.setState({isLoggedIn : true});
  };

  handleChangeEmail(event) {
    const { value } = event.target;
    const {password} = this.state;
    if (value !== "" && password !== ""){
      this.setState({enableSubmit : true});
    } else {
      this.setState({enableSubmit : false});
    }
    this.setState({email: event.target.value});
  };

  handleChangePassword(event) {
    const { value } = event.target;
    const {email} = this.state;
    if (value !== "" && email !== ""){
      this.setState({enableSubmit : true});
    } else {
      this.setState({enableSubmit : false});
    }
    this.setState({password: event.target.value});
  };

render () {
const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
    [screenSize.small]: {
      marginTop: "10px",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});
return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email:</label>
      <form action="" onSubmit={this.handleLoginSubmit}>
        <input type="email" value={this.state.email} id="email" onChange={this.handleChangeEmail} className={css(styles.loginInput)} />
        <label htmlFor="password">Password:</label>
        <input type="password" value={this.state.password} id="password" onChange={this.handleChangePassword} className={css(styles.loginInput)} />
        <input type="submit"  disabled={!enableSubmit}/>
      </form>
    </div>
  );
}
}
export default Login;
