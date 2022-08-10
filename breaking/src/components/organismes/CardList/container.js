import React from "react";
// import style from "./style.module.scss";
// import Card from "../../molecules/Card";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPersons } from "../../../store/actions/persons";
import CardList from "./component";

const CardListContainer = () => {
  const persons = useSelector((state) => state.persons.persons);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersons());
  }, []);

  return <div >
    <CardList persons={persons} />
  </div>
};

export const container = CardListContainer;
