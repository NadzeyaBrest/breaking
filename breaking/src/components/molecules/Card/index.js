import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";

const Card = ({ id, img, status, name, date }) => {
  return (
    <NavLink to={`/catalog/${id}`}>
      <div className={style.item}>
        <div className={style.img}>
          <img src={img} alt="pearsonimg" />
        </div>
        <div className={style.content}>
          <div className={style.status}>{status}</div>
          <div>
            <p className={style.name}>{name}</p>
            <p className={style.date}>{date}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Card;
