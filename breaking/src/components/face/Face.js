import React from "react";
import s from "./Face.module.css";
const Face = () => {
  return (
    <div class={s.item}>
      <div className={s.img__container}>
        <img
          className={s.img}
          src="https://m.buro247.ru/images/senina/aiony-haust-3TLl_97HNJo-unspl.jpg"
          alt="man"
        ></img>
      </div>
      <div className={s.catalog__content}>
        <a className={s.button__catalog}> Живой</a>
        <div>
          <p className={s.catalog__subtitle}>Андрeй Панасюк</p>
          <p className={s.catalog__date}>23.11.2001</p>
        </div>
      </div>
    </div>
  );
};
export default Face;
