import React from "react";
import style from "./style.module.scss";
import CardList from "../../organismes/CardList";
import CatalogSetting from "../../organismes/CatalogSetting";

const CatalogPage = () => {
  return (
    <div className={style.wrapper}>
      <CardList />
      <CatalogSetting />
    </div>
  );
};
export default CatalogPage;
