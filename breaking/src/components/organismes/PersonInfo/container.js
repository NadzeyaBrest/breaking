import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  getPerson,
  getQuote,
  getRandomQuote,
} from "../../../store/actions/persons";
import { useParams } from "react-router-dom";
import PersonInfo from "./component";

const PersonInfoContainer = () => {
  const { id } = useParams();
  const person = useSelector((state) => state.persons.person);
  let nameForQuotes = person.name;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson(id));
  }, []);
  useEffect(() => {
    dispatch(getQuote(nameForQuotes));
  }, [person]);
  let randomFunction = (min, max) => {
    let random = min + Math.random() * (max + 1 - min);
    return Math.trunc(random);
  };
  let random = randomFunction(0, 80);

  useEffect(() => {
    dispatch(getRandomQuote(random));
  }, []);

  let quoteFromState = useSelector((state) => state.persons.quote);
  let randomQuote = useSelector((state) => state.persons.randomQuote);
  console.log(randomQuote);

  let result = quoteFromState ? quoteFromState : randomQuote;

  return (
    <PersonInfo
      birthday={person.birthday}
      img={person.img}
      status={person.status}
      name={person.name}
      nick={person.nickname}
      quote={result.quote}
    />
  );
};

export const container = PersonInfoContainer;
