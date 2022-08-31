import { useEffect, useState } from "react";
import React from "react";
import style from "./style.module.scss";
import arrow from "../../../assets/images/arrow.svg";

const Pagination = ({
  limit,
  currentPage,
  buttons,
  setPaginationNumber,

  setPaginationNumberViaArrowLeft,
  setPaginationNumberViaArrowRight,
}) => {
  let btnElement = buttons.map((item) => {
    let btnStyle =
      currentPage === item ? style.colored + " " + style.button : style.button;
    return (
      <button
        key={item}
        className={btnStyle}
        onClick={() => setPaginationNumber(item, limit)}
      >
        {item}
      </button>
    );
  });

  return (
    <div className={style.wrapper}>
      <div>{btnElement}</div>
      <span>
        <img
          className={style.arrayLeft}
          alt="array-left"
          src={arrow}
          onClick={setPaginationNumberViaArrowLeft}
        />
        <img
          className={style.arrayRight}
          alt="array-right"
          src={arrow}
          onClick={setPaginationNumberViaArrowRight}
        />
      </span>
    </div>
  );
};
export default Pagination;
