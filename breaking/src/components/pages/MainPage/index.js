import React from "react";
import Header from "../../organismes/Header";
import Footer from "../../organismes/Footer";
import style from "./style.module.scss";
import Picture from "../../molecules/Picture";

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Picture />
      <Footer />
    </div>
  );
};
export default MainPage;
