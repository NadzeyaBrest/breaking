import React from "react";
import style from "./style.module.scss";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Card = ({ id, img, status, name, date }) => {
  let toggled = useSelector((state) => state.persons.toggled);
  let cardView = toggled ? style.item : style.row;
  let cardImg = toggled ? style.img : style.imgRow;
  let cardImage = toggled ? style.image : style.imageRow;
  let cardContent = toggled ? style.content : style.contentRow;
  let cardStatus = toggled ? style.status : style.statusRow;
  return (
    <NavLink to={`/catalog/${id}`}>
      <div className={cardView}>
        <div className={cardImg}>
          <img className={cardImage} src={img} alt="pearsonimg" />
        </div>
        <div className={cardContent}>
          <div className={cardStatus}>{status}</div>
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
