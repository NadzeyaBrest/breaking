import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPersonViaName } from "../../../store/actions/persons";
import { useNavigate } from "react-router-dom";
import Search from "./component";

const SearchContainer = () => {
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
  return <Search submit={submit} setValue={setValue} value={value} />;
};
// export default Search;
export const container = SearchContainer;
