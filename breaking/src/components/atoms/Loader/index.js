import React from "react";
import loader from "../../../assets/images/loader.gif";
import style from "./style.module.scss";

const Loader = () => {
  return (
    <div className={style.wrapper}>
      <img src={loader} />
    </div>
  );
};
export default Loader;
