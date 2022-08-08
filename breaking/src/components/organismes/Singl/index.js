import React from "react";
import style from "./style.module.scss";
import Arrow from "../../atoms/Arrow";
import BigCard from "../../molecules/BigCard";
import { useSelector } from "react-redux";

const Singl = () => {
  const persons = useSelector((state) => state.persons.persons);
  let cardElements = persons.map((card) => {
    return (
      <BigCard
        img={card.img}
        status={card.status}
        name={card.name}
        date={card.date}
        nick={card.nick}
        quote={card.quote}
      />
    );
  });

  return (
    <div className={style.wrapper}>
      <Arrow />
      {cardElements[2]}
    </div>
  );
};

export default Singl;
