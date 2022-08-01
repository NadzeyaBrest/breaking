import React from "react";
import style from "./style.module.scss";

const BigCard = (props) => {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src={props.img} alt="pearsonimg" />
      </div>
      <div className={style.content}>
        <span className={style.status}>{props.status}</span>
        <div>
          <p className={style.name}>{props.name}</p>
          <p className={style.date}>
            <span className={style.determinaton}>Дата рождения:</span>{" "}
            {props.date}
          </p>
          <p className={style.nick}>
            <span className={style.determinaton}>Ник-нейм:</span> {props.nick}{" "}
          </p>
          <p className={style.quote}>
            <span className={style.determinaton}>Цитата</span> {props.quote}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
