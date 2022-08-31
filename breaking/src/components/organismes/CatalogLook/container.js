import React, { useEffect, useState } from "react";
import style from "./style.module.scss";
import squares2Grey from "../../../assets/images/squares2Grey.svg";
import squares2Yellow from "../../../assets/images/squares2Yellow.svg";
import squares4Grey from "../../../assets/images/squares4Grey.svg";
import squares4Yellow from "../../../assets/images/squares4Yellow.svg";
import { useDispatch } from "react-redux";
import { persons } from "../../../store/reducers/persons";
import CatalogLook from "./component";
import { useSelector } from "react-redux/es/exports";

const CatalogLookContainer = () => {
  let [toggled, setToggled] = useState(true);

  let dispatch = useDispatch();
  let setToggledIntoState = (value) => {
    setToggled(value);
    dispatch(persons.actions.setToggledIntoState(value));
  };
  toggled = useSelector((state) => state.persons.toggled);

  let firstButton = !toggled ? squares2Yellow : squares2Grey;
  let secondButton = toggled ? squares4Yellow : squares4Grey;
  let opacity = toggled ? style.opacityForButton : "";

  return (
    <CatalogLook
      setToggledIntoState={setToggledIntoState}
      opacity={opacity}
      firstButton={firstButton}
      secondButton={secondButton}
    />
  );
};
export const container = CatalogLookContainer;
