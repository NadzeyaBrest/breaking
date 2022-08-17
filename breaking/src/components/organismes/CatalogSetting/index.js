import React from "react";
import SwitchNumberOfCard from "../../molecules/SwitchNumberOfCard";
import Pagination from "../Pagination";
import style from "./style.module.scss";

const CatalogSetting = () => {
  return (
    <div className={style.container}>
      <Pagination />
      <SwitchNumberOfCard />
    </div>
  );
};

export default CatalogSetting;
