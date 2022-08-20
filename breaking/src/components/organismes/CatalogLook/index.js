import React from "react";
import style from "./style.module.scss";
import squares from "../../../assets/images/squares.svg";
import squareLong from "../../../assets/images/squareLong.svg";

const CatalogLook = () => {
  return (
    <div className={style.container}>
      <span>Каталог</span>
      <div classname={style.buttonsContainer}>
        <button>
          <img src={squareLong} alt="button" />
        </button>
        <button>
          <img src={squares} alt="button" />
        </button>
      </div>
    </div>
  );
};
export default CatalogLook;
