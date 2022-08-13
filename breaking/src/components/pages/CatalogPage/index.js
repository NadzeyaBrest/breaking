import React from "react";
import style from "./style.module.scss";
import CardList from "../../organismes/CardList";
import SwitchNumberOfCard from "../../molecules/SwitchNumberOfCard";

const CatalogPage = () => {
  return (
    <div className={style.wrapper}>
      <CardList />
      <SwitchNumberOfCard />
    </div>
  );
};
export default CatalogPage;
