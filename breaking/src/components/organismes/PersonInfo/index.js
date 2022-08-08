import React from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import BackToCatalog from "../../atoms/BackToCatalog";
import { getPerson } from "../../../store/actions/persons";
import BigCard from "../../molecules/BigCard";
import { useParams } from "react-router-dom";

const PersonInfo = () => {
  console.log(useParams());
  const { id } = useParams();
  const person = useSelector((state) => state.persons.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPerson(id));
  }, []);

  return (
    <div className={style.wrapper}>
      <BackToCatalog />
      <BigCard
        id={person.id}
        img={person.img}
        status={person.status}
        name={person.name}
        nick={person.nick}
        quote={person.quote}
      />
    </div>
  );
};

export default PersonInfo;
