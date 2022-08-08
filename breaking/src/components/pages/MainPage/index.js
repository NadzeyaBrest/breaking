import React from "react";
import style from "./style.module.scss";
import MainPicture from "../../molecules/MainPicture";

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <MainPicture />
    </div>
  );
};
export default MainPage;
