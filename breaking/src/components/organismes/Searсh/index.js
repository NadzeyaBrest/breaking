import React, { useEffect } from "react";
import style from "./style.module.scss";
import glass from "../../../assets/images/union.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { persons } from "../../../store/reducers/persons";
import { getPersonViaName } from "../../../store/actions/persons";
import { useNavigate } from "react-router-dom";

const Search = () => {
  let [value, setValue] = useState("");
  let navigate = useNavigate();

  let dispatch = useDispatch();
  const search = (name) => {
    dispatch(getPersonViaName(name));
  };
  const submit = (e) => {
    e.preventDefault();
    search(value);
    setValue("");
    navigate("/catalog/search", { replace: true });
  };
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
