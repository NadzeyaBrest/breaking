import React, { useState } from "react";
import style from "./style.module.scss";
import squares from "../../../assets/images/squares.svg";
import squareLong from "../../../assets/images/squareLong.svg";
import { useDispatch } from "react-redux";
import { persons } from "../../../store/reducers/persons";

const CatalogLook = () => {
  let [toggled, setToggled] = useState(true);

  let dispatch = useDispatch();
  let setToggledIntoState = (value) => {
    setToggled(!value);
    dispatch(persons.actions.setToggledIntoState(toggled));
  };
  return (
    <div className={style.container}>
      <span>Каталог</span>
      <div className={style.buttonsContainer}>
        <button onClick={() => setToggledIntoState(false)}>
          <img src={squareLong} alt="button" />
        </button>
        <button onClick={() => setToggledIntoState(true)}>
          <img src={squares} alt="button" />
        </button>
      </div>
    </div>
  );
};
export default CatalogLook;
