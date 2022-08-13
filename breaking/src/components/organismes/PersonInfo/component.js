import React from "react";
import style from "./style.module.scss";
import BigCard from "../../molecules/BigCard";

const PersonInfo = ({ person }) => {
  return (
    <div className={style.wrapper}>
      <BigCard
        birthday={person.birthday}
        img={person.img}
        status={person.status}
        name={person.name}
        nick={person.nickname}
      />
    </div>
  );
};

export default PersonInfo;
