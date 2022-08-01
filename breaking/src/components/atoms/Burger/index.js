import React from "react";
import style from "./style.module.scss";

const Burger = () => {
  return (
    <span className={style.burger}>
      <span className={style.line}></span>
    </span>
  );
};
export default Burger;
