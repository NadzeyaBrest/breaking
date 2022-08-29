import React, { useState } from "react";
import style from "./style.module.scss";

const CatalogLook = ({
  setToggledIntoState,
  opacity,
  firstButton,
  secondButton,
}) => {
  return (
    <div className={style.container}>
      <span className={style.catalog}>Каталог</span>
      <div className={style.buttonsContainer}>
        <button className={opacity} onClick={() => setToggledIntoState(false)}>
          <img src={firstButton} alt="button" />
        </button>
        <button onClick={() => setToggledIntoState(true)}>
          <img src={secondButton} alt="button" />
        </button>
      </div>
    </div>
  );
};
export default CatalogLook;
