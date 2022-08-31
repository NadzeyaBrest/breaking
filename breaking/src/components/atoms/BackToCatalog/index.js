import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import arrow from "../../../assets/images/arrow.svg";
import { useDispatch, useSelector } from "react-redux";
import { clearNameFounded } from "../../../store/actions/persons";

const BackToCatalog = () => {
  let dispatch = useDispatch();
  let clearState = () => {
    dispatch(clearNameFounded());
  };

  return (
    <div className={style.wrapper} onClick={clearState}>
      <NavLink className={style.link} to="/catalog">
        <img src={arrow} className={style.arrow} alt="arrow" />
        Назад в Каталог
      </NavLink>
    </div>
  );
};
export default BackToCatalog;
