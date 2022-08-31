import React from "react";
import style from "./style.module.scss";
import MainPicture from "../../molecules/MainPicture";
import { clearNameFounded } from "../../../store/actions/persons";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const MainPage = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(clearNameFounded());
  }, []);

  return (
    <div className={style.wrapper}>
      <MainPicture />
    </div>
  );
};
export default MainPage;
