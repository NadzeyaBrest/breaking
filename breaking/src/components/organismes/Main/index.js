import React from "react";
import CardList from "../CardList";
import style from "./style.module.scss";

const Main = () => {
  return (
    <div className={style.main}>
      <CardList />
    </div>
  );
};
export default Main;
