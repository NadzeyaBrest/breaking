import React from "react";
import { NavLink } from "react-router-dom";
import Burger from "../../atoms/Burger";
import style from "./style.module.scss";
import { useLocation } from "react-router-dom";

const Button = () => {
  const location = useLocation();
  console.log(location.pathname);

  const buttonColored =
    location.pathname === "/catalog"
      ? style.button + " " + style.colored
      : style.button;
  return (
    <NavLink to="/catalog" className={buttonColored}>
      <Burger />
      <NavLink to="/catalog" className={style.text}>
        Kаталог
      </NavLink>
    </NavLink>
  );
};
export default Button;
