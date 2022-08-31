import React, { useEffect } from "react";
import style from "./style.module.scss";
import arrow from "../../../assets/images/arrow.svg";

const PaginationThird = ({
  currentButton,
  setCurrentButtonPagination,
  PaginationArray,
  arrowStyleLeft,
  arrowStyleRight,
  setCurrentButtonPaginationViaArrayRight,
  setCurrentButtonPaginationViaArrayLeft,
}) => {
  let buttonElement = PaginationArray.map((number) => {
    let btnStyle =
      number === currentButton
        ? style.button + " " + style.colored
        : style.button;

    return (
      <button
        key={number}
        onClick={(e) => {
          setCurrentButtonPagination(e, number);
        }}
        className={btnStyle}
      >
        {number}
      </button>
    );
  });
  return (
    <div className={style.buttonContainer}>
      {buttonElement}
      <span>
        <img
          src={arrow}
          className={arrowStyleLeft}
          alt="arrowLeft"
          onClick={setCurrentButtonPaginationViaArrayLeft}
        />
      </span>
      <span>
        <img
          src={arrow}
          className={arrowStyleRight}
          alt="arrowRight"
          onClick={setCurrentButtonPaginationViaArrayRight}
        />
      </span>
    </div>
  );
};

export default PaginationThird;
