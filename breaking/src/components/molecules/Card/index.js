import React from "react";
import s from "./style.module.scss";
import man from "../../../assets/images/man.jpg";

const Card = () => {
  return (
    <div class={s.item}>
      <div className={s.img}>
        <img src={man} alt="man" />
      </div>
      <div className={s.content}>
        <span className={s.status}> Живой</span>
        <div>
          <p className={s.name}>Андрeй Панасюк</p>
          <p className={s.date}>23.11.2001</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
