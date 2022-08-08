import React from "react";
import style from "./style.module.scss";
import CardList from "../../organismes/CardList";

const CatalogPage = () => {
  return (
    <div className={style.wrapper}>
      <CardList />
    </div>
  );
};
export default CatalogPage;
