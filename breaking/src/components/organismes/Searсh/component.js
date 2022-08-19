import React, { useEffect } from "react";
import style from "./style.module.scss";
import glass from "../../../assets/images/union.svg";

const Search = ({ submit, setValue, value }) => {
  return (
    <form className={style.wrapper} onSubmit={submit}>
      <div name="search" className={style.search}>
        <input
          type="text"
          placeholder="Поиск"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button type="submit" className={style.button}>
          <img src={glass} alt="glass" />
          <span> Найти </span>
        </button>
      </div>
    </form>
  );
};
export default Search;
