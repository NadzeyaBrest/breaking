import React from "react";
import CardList from "../../organismes/CardList";
import CatalogLook from "../../organismes/CatalogLook";
import CatalogSetting from "../../organismes/CatalogSetting";
import Search from "../../organismes/Searсh";
import { clearNameFounded } from "../../../store/actions/persons";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import style from "./style.module.scss";

const CatalogPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearNameFounded());
  }, []);

  return (
    <div className={style.wrapper}>
      <Search />
      <CatalogLook />
      <CardList />
      <CatalogSetting />
    </div>
  );
};
export default CatalogPage;
