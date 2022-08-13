import React from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPerson, getQuote } from "../../../store/actions/persons";
import { useParams } from "react-router-dom";
import PersonInfo from "./component";

const PersonInfoContainer = () => {
  const { id } = useParams();
  const person = useSelector((state) => state.persons.person);
  const quote = useSelector((state) => state.persons.quote);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson(id));
  }, []);
  useEffect(() => {
    dispatch(getQuote(id));
  }, []);

  return (
    <PersonInfo
      birthday={person.birthday}
      img={person.img}
      status={person.status}
      name={person.name}
      nick={person.nickname}
      quote={quote.quote}
      author={quote.author}
    />
  );
};

export const container = PersonInfoContainer;
