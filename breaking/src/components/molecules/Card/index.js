import React from "react";
import style from "./style.module.scss";
import man from "../../../assets/images/man.jpg";

const Card = (props) => {
  let { card } = props;
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src={man} alt="man" />
      </div>
      <div className={style.content}>
        <span className={style.status}>{card.status}</span>
        <div>
          <p className={style.name}>{card.name}</p>
          <p className={style.date}>{card.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
