import React from "react";
import style from "./style.module.scss";
// import man from "../../../assets/images/man.jpg";

const Card = (props) => {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src={props.img} alt="pearsonimg" />
      </div>
      <div className={style.content}>
        <span className={style.status}>{props.status}</span>
        <div>
          <p className={style.name}>{props.name}</p>
          <p className={style.date}>{props.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
