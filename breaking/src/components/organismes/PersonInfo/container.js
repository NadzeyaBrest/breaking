import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPerson, getQuote } from "../../../store/actions/persons";
import { useParams } from "react-router-dom";
import PersonInfo from "./component";

const PersonInfoContainer = () => {
  const { id } = useParams();
  const person = useSelector((state) => state.persons.person);
  let nameForQuotes = person.name;

  console.log(nameForQuotes);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson(id));
  }, []);
  useEffect(() => {
    dispatch(getQuote(nameForQuotes));
  }, []);
  const quote = useSelector((state) => state.persons.quote);

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
