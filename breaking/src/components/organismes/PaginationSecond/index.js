import React, { useEffect } from "react";
import { useState } from "react";
import style from "./style.module.scss";
import array from "../../../assets/images/arrow.svg";
import { persons } from "../../../store/reducers/persons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAmount } from "../../../store/actions/persons";

const PaginationSecond = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAmount());
  }, []);
  let allPersons = useSelector((state) => state.persons.totalAmountPersons);
  let limit = useSelector((state) => state.persons.limit);
  let amountOfButtons = Math.ceil(allPersons.length / limit);
  let currentButton = useSelector(
    (state) => state.persons.currentButtonPagination
  );

  let arrOfButtons = [];
  for (let i = 1; i <= amountOfButtons; i++) {
    arrOfButtons.push(i);
  }

  const setCurrentIntoState = (number) => {
    dispatch(persons.actions.setCurrentButton(number));
    console.log(number);
  };

  const [currentArrayOfButtons, setCurrentArrayOfButtons] = useState([]);

  useEffect(() => {
    let dotsInitial = "...";
    let dotsLeft = "... ";
    let dotsRight = " ...";

    let tempArrOfButtons = [...arrOfButtons];
    if (currentButton >= 1 && currentButton <= 2) {
      tempArrOfButtons = [1, 2, dotsInitial, amountOfButtons];
    } else if (currentButton === 3) {
      let sliced = arrOfButtons.slice(0, 4);
      tempArrOfButtons = [...sliced, dotsInitial, arrOfButtons.length];
    } else if (currentButton > 4 && currentButton < arrOfButtons.length - 2) {
      let sliced1 = arrOfButtons.slice(currentButton - 2, currentButton);
      let sliced2 = arrOfButtons.slice(currentButton, currentButton + 1);
      tempArrOfButtons = [
        1,
        dotsLeft,
        ...sliced1,
        ...sliced2,
        dotsRight,
        arrOfButtons.length,
      ];
    } else if (currentButton > arrOfButtons.length - 3) {
      let sliced = arrOfButtons.slice(arrOfButtons.length - 4);
      tempArrOfButtons = [1, dotsLeft, ...sliced];
    } else if (currentButton === dotsInitial) {
      let number = currentArrayOfButtons[arrOfButtons.length - 3] + 1;
      setCurrentIntoState(number);
    } else if (currentButton === dotsRight) {
      let number = currentArrayOfButtons[3] + 2;
      setCurrentIntoState(number);
    } else if (currentButton === dotsLeft) {
      let number = currentArrayOfButtons[3] - 2;
      setCurrentIntoState(number);
    }
    setCurrentArrayOfButtons(tempArrOfButtons);
  }, [currentButton]);

  const setPaginationNumberViaArrowRight = () => {
    if (currentButton === amountOfButtons) {
      currentButton = 1;
      let offset = 0;
      dispatch(persons.actions.setOffset(offset));
      setCurrentIntoState(currentButton);
    } else {
      currentButton++;
      let offset = currentButton * limit - limit;
      dispatch(persons.actions.setOffset(offset));
      setCurrentIntoState(currentButton);
    }
  };

  const setPaginationNumberViaArrowLeft = () => {
    if (currentButton === 1) {
      currentButton = amountOfButtons;
      let offset = (currentButton - 1) * limit - limit;
      dispatch(persons.actions.setOffset(offset));
      setCurrentIntoState(currentButton);
      console.log(`ofset${offset}`);
      console.log(`currentPage${currentButton}`);
    } else {
      currentButton--;
      let offset = currentButton * limit - limit;
      dispatch(persons.actions.setOffset(offset));
      setCurrentIntoState(currentButton);
      console.log(`ofset${offset}`);
      console.log(`currentPage${currentButton}`);
    }
  };
  let buttonElement = currentArrayOfButtons.map((number) => {
    let coloredButton =
      currentButton === number
        ? style.button + " " + style.colored
        : style.button;
    return (
      <button
        key={number}
        onClick={() => setCurrentIntoState(number)}
        className={coloredButton}
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
          onClick={setPaginationNumberViaArrowLeft}
          className={style.arrayLeft}
          src={array}
        />
        <img
          onClick={setPaginationNumberViaArrowRight}
          className={style.arrayRight}
          src={array}
        />
      </span>
    </div>
  );
};
export default PaginationSecond;
