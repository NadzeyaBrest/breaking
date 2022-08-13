import { useState } from "react";
import React from "react";
import style from "./style.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { persons } from "../../../store/reducers/persons";
import arrow from "../../../assets/images/arrow.svg";

const Pagination = () => {
  let dispatch = useDispatch();
  const [buttons] = useState([1, 2, 3, 4, 5]);
  let limit = useSelector((state) => state.persons.limit);
  let offsetOutOffStage = useSelector((state) => state.persons.offset);

  const setPaginationNumber = (number, limit) => {
    let offset = number * limit - limit;
    dispatch(persons.actions.setOffset(offset));
  };

  const setPaginationNumberViaArrowRight = () => {
    let number = (offsetOutOffStage + limit) / limit;
    console.log(number);
    if (number === 5) {
      number = 0;
    }
    let offset = (number + 1) * limit - limit;
    dispatch(persons.actions.setOffset(offset));
  };

  const setPaginationNumberViaArrowLeft = () => {
    let number = (offsetOutOffStage + limit) / limit;
    console.log(number);
    if (number === 0) {
      number = 5;
    }
    let offset = (number - 1) * limit - limit;
    dispatch(persons.actions.setOffset(offset));
  };

  let btnElement = buttons.map((item) => {
    let btnStyle =
      (offsetOutOffStage + limit) / limit === item
        ? style.colored + " " + style.button
        : style.button;
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
          onClick={() => setPaginationNumberViaArrowLeft()}
        />
        <img
          className={style.arrayRight}
          alt="array-right"
          src={arrow}
          onClick={() => setPaginationNumberViaArrowRight()}
        />
      </span>
    </div>
  );
};
export default Pagination;
