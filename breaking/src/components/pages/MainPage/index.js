import React from "react";
import Header from "../../organismes/Header";
import Footer from "../../organismes/Footer";
// import Main from "../../organismes/Main";
import style from "./style.module.scss";

const MainPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />

      <Footer />
    </div>
  );
};
export default MainPage;
