import React from "react";

import CardList from "../../organismes/CardList";
import CatalogSetting from "../../organismes/CatalogSetting";
import Search from "../../organismes/Searсh";

const CatalogPage = () => {
  return (
    <div>
      <Search />
      <CardList />
      <CatalogSetting />
    </div>
  );
};
export default CatalogPage;
