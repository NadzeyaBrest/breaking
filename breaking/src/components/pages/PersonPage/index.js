import React from "react";
import BackToCatalog from "../../atoms/BackToCatalog";
import PersonInfo from "../../organismes/PersonInfo";
import style from "./style.module.scss";

const PersonPage = () => {
  return (
    <div className={style.wrapper}>
      <BackToCatalog />
      <PersonInfo />
    </div>
  );
};
export default PersonPage;
