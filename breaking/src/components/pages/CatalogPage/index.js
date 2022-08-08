import React from "react";
import Header from "../../organismes/Header";
import Footer from "../../organismes/Footer";
import Main from "../../organismes/Main";
import style from "./style.module.scss";

const CatalogPage = () => {
  return (
    <div className={style.wrapper}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
export default CatalogPage;
