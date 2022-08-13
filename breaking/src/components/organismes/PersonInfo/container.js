import React from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPerson } from "../../../store/actions/persons";
import { useParams } from "react-router-dom";
import PersonInfo from "./component";

const PersonInfoContainer = () => {
  const { id } = useParams();
  const person = useSelector((state) => state.persons.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson(id));
  }, []);

  return <PersonInfo person={person} />;
};

export const container = PersonInfoContainer;
