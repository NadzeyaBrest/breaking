import React from "react";
import CardList from "../CardList";
import style from "./style.module.scss";

const Wrapper = () => {
  return (
    <div className={style.wrapper}>
      <CardList />
    </div>
  );
};

export default Wrapper;
