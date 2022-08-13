import React from "react";
import style from "./style.module.scss";

const BigCard = ({ img, status, name, nick, birthday }) => {
  return (
    <div className={style.item}>
      <div className={style.img}>
        <img src={img} alt="pearsonimg" />
      </div>
      <div className={style.content}>
        <span className={style.status}>{status}</span>
        <div>
          <p className={style.name}>{name}</p>
          <p className={style.date}>
            <span className={style.determinaton}>Дата рождения:</span>
            {birthday}
          </p>
          <p className={style.nick}>
            <span className={style.determinaton}>Ник-нейм:</span> {nick}
          </p>
          <p className={style.quote}>
            <span className={style.determinaton}>Цитата</span> Будет quote
          </p>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
