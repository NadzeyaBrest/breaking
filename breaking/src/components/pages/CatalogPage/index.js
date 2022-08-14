import React from "react";
import style from "./style.module.scss";
import CardList from "../../organismes/CardList";
import CatalogSetting from "../../organismes/CatalogSetting";
import Search from "../../organismes/Searсh";

const CatalogPage = () => {
  return (
    <div className={style.wrapper}>
      <Search />
      <CardList />
      <CatalogSetting />
    </div>
  );
};
export default CatalogPage;
