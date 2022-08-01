import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src={props.img} alt="pearsonimg" />
      </div>
      <div className={style.content}>
        <NavLink to="/catalog3" className={style.status}>
          {props.status}
        </NavLink>
        <div>
          <p className={style.name}>{props.name}</p>
          <p className={style.date}>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
