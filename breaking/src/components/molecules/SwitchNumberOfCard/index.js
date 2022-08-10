import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
// import { useDispatch } from "react-redux/es/exports";
// import { getPersons } from "../../../store/actions/persons";

const SwitchNumberOfCard = () => {
  const [buttons, setButtons] = useState([5, 10, 15, 20]);
  function getLimit(limit) {
    console.log(limit);
    return limit;
  }
  function makeColored(event) {
    console.log(event.target.tagName());
    event.target.classList.add("colored");
  }
  // let dispatch = useDispatch();

  // useEffect(() => dispatch(getPersons(), []));

  let btnElement = buttons.map((item) => {
    return (
      <button
        onClick={() => getLimit(item)}
        onclick={() => makeColored()}
        className={style.button}
      >
        {item}
      </button>
    );
  });
  return (
    <div className={style.container}>
      <span>Отобразить карточек</span>

      <div>{btnElement}</div>
    </div>
  );
};

export default SwitchNumberOfCard;
