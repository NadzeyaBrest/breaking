import React from "react";
import SwitchNumberOfCard from "../../molecules/SwitchNumberOfCard";
// import Pagination from "../Pagination";
import style from "./style.module.scss";
// import PaginationSecond from "../PaginationSecond";
import PaginationThird from "../PaginationThird";

const CatalogSetting = () => {
  return (
    <div className={style.container}>
      {/* <Pagination /> */}
      <PaginationThird />
      <SwitchNumberOfCard />
    </div>
  );
};

export default CatalogSetting;
