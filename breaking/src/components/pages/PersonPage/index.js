import React from "react";
import BackToCatalog from "../../atoms/BackToCatalog";
import PersonInfo from "../../organismes/PersonInfo";
import style from "./style.module.scss";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { clearNameFounded } from "../../../store/actions/persons";

const PersonPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearNameFounded());
  }, []);

  return (
    <div className={style.wrapper}>
      <BackToCatalog />
      <PersonInfo />
    </div>
  );
};
export default PersonPage;
