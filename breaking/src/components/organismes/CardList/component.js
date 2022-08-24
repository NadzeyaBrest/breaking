import React from "react";
import style from "./style.module.scss";
import Card from "../../molecules/Card";
import loader from "../../../assets/images/loader.gif";

const CardList = ({ persons, isLoading, toggled }) => {
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
  let choiceOfCardList = toggled ? style.grid : style.row;
  return (
    <div className={style.wrapper}>
      {isLoading ? (
        <div className={style.loader}>
          <img className={style.loaderImage} src={loader} />
        </div>
      ) : (
        <div className={choiceOfCardList}>{cardElement} </div>
      )}
    </div>
  );
};

export default CardList;
