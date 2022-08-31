import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPersons } from "../../../store/actions/persons";
import { clearTest } from "../../../store/actions/persons";
import CardList from "./component";

const CardListContainer = () => {
  const persons = useSelector((state) => state.persons.persons);
  const limit = useSelector((state) => state.persons.limit);
  const offset = useSelector((state) => state.persons.offset);
  const isLoading = useSelector((state) => state.persons.isLoading);
  const nameSearch = useSelector((state) => state.persons.name);
  let personsForShow = nameSearch.length === 0 ? persons : nameSearch;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPersons(limit, offset));
  }, [limit, offset]);
  useEffect(() => {
    dispatch(clearTest());
  }, []);
  let toggled = useSelector((state) => state.persons.toggled);

  return (
    <div>
      <CardList
        persons={personsForShow}
        isLoading={isLoading}
        toggled={toggled}
      />
    </div>
  );
};

export const container = CardListContainer;
