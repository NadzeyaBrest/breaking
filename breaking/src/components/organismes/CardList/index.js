import React from "react";
import style from "./style.module.scss";
import Card from "../../molecules/Card";
import cards from "../../../cards";

const CardList = () => {
  let cardElement = cards.map((card) => {
    return (
      <Card
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
