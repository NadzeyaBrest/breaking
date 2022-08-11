import React from "react";
import style from "./style.module.scss";

const SwitchNumberOfCard = ({ changeStateLimit, buttons, limit }) => {
  let btnElement = buttons.map((item) => {
    let buttonStyle =
      item === limit ? style.button + " " + style.colored : style.button;
    return (
      <button onClick={() => changeStateLimit(item)} className={buttonStyle}>
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
