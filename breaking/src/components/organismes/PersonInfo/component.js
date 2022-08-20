import React from "react";
import style from "./style.module.scss";
import BigCard from "../../molecules/BigCard";

const PersonInfo = ({ birthday, img, status, name, nick, quote, author }) => {
  return (
    <div className={style.wrapper}>
      <BigCard
        birthday={birthday}
        img={img}
        status={status}
        name={name}
        nick={nick}
        quote={quote}
      />
    </div>
  );
};

export default PersonInfo;
