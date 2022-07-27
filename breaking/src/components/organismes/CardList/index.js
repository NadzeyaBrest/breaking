import React from "react";
import style from "./style.module.scss";
import Card from "../../molecules/Card";

const CardList = ({ cards }) => {
  let cardElement = cards.map((card) => {
    return <Card card={card} />;
  });

  return <div className={style.grid}>{cardElement}</div>;
};

export default CardList;
