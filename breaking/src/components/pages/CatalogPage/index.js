import React from "react";
import CardList from "../../organismes/CardList";
import CatalogLook from "../../organismes/CatalogLook";
import CatalogSetting from "../../organismes/CatalogSetting";
import Search from "../../organismes/Searсh";

const CatalogPage = () => {
  return (
    <div>
      <Search />
      <CatalogLook />
      <CardList />
      <CatalogSetting />
    </div>
  );
};
export default CatalogPage;
