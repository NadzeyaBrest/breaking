import React from "react";
import style from "./style.module.scss";
import Card from "../../molecules/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPersons } from "../../../store/actions/persons";

const CardList = () => {
  const persons = useSelector((state) => state.persons.persons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersons());
  });
  let cardElement = persons.map((card) => {
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
