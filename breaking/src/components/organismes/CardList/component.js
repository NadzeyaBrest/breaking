import React from "react";
import style from "./style.module.scss";
import Card from "../../molecules/Card";

const CardList = ({ persons }) => {
  let cardElement = persons.map((card) => {
    return (
      <Card
        key={card.char_id}
        id={card.char_id}
        img={card.img}
        status={card.status}
        name={card.name}
        date={card.date}
      />
    );
  });

  return <div className={style.grid}>{cardElement}</div>;
};

export default CardList;
