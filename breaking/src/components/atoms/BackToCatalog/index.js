import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import arrow from "../../../assets/images/arrow.svg";

const BackToCatalog = () => {
  return (
    <div className={style.wrapper}>
      <img src={arrow} className={style.arrow} alt="arrow" />
      <NavLink className={style.link} to="/catalog">
        Назад в Каталог
      </NavLink>
    </div>
  );
};
export default BackToCatalog;
