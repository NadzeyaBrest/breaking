import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "../../atoms/Burger";
import style from "./style.module.scss";
import { useLocation } from "react-router-dom";

const Button = () => {
  const location = useLocation();
  const buttonColored =
    location.pathname === "/catalog"
      ? style.button + " " + style.colored
      : style.button;
  return (
    <NavLink to="/catalog" className={buttonColored}>
      <Burger />
      <span className={style.text}>Kаталог</span>
    </NavLink>
  );
};
export default Button;
