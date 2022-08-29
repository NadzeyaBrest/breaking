import React from "react";
import CardList from "../../organismes/CardList";
import CatalogLook from "../../organismes/CatalogLook";
import CatalogSetting from "../../organismes/CatalogSetting";
import Search from "../../organismes/Searсh";
import { clearNameFounded } from "../../../store/actions/persons";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const CatalogPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearNameFounded());
  }, []);

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
