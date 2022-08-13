import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/images/logo.svg";
import style from "./style.module.scss";

const Logo = () => {
  return (
    <NavLink to="/" className={style.logo}>
      <img src={logo} alt="logo"></img>
    </NavLink>
  );
};

export default Logo;
