import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import { persons } from "../../../store/reducers/persons";
import { useDispatch, useSelector } from "react-redux/es/exports";
import SwitchNumberOfCard from "./component";

const SwitchNumberOfCardContainer = () => {
  const [buttons] = useState([10, 15, 20, 25, 30]);
  const limit = useSelector((state) => state.persons.limit);
  const dispatch = useDispatch();
  const changeStateLimit = (limit) => {
    dispatch(persons.actions.setLimit(limit));
  };

  return (
    <div>
      <SwitchNumberOfCard
        buttons={buttons}
        changeStateLimit={changeStateLimit}
        limit={limit}
      />
    </div>
  );
};

export const container = SwitchNumberOfCardContainer;
