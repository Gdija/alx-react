import React from 'react';
import logo from '../assets/holberton_logo.jpg';
import { StyleSheet, css } from "aphrodite";

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="logo"  className={css(styles.headerImg)}/>
      <h1>School dashboard</h1>
    </div>
  )
}

const root = {
  holbertonRed: "#e1484c",
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    borderBottom: `3px solid ${root.holbertonRed}`,
    marginTop: "30px",
  },
  headerImg: {
    width: "150px",
  }
});

export default Header;
