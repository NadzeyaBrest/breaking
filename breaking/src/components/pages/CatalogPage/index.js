import React from "react";
import style from "./style.module.scss";
import CardList from "../../organismes/CardList";
import CatalogSetting from "../../organismes/CatalogSetting";
import Search from "../../organismes/Searсh";
import { persons } from "../../../store/reducers/persons";
import { useDispatch, useSelector } from "react-redux";
import Card from "../../molecules/Card";

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
