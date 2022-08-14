import React, { useEffect } from "react";
import style from "./style.module.scss";
import glass from "../../../assets/images/union.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { persons } from "../../../store/reducers/persons";
import { getPersonViaName } from "../../../store/actions/persons";

const Search = () => {
  let [value, setValue] = useState("");

  let dispatch = useDispatch();
  const search = (name) => {
    dispatch(getPersonViaName(name));
  };
  const submit = () => {
    search(value);
    setValue("");
  };
  return (
    <div className={style.wrapper}>
      <div name="search" className={style.search}>
        <input
          type="search"
          placeholder="Поиск"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={style.button} onClick={submit}>
          <img src={glass} />
          <span>Найти</span>
        </button>
      </div>
    </div>
  );
};
export default Search;
