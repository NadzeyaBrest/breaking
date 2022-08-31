import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { persons } from "../../../store/reducers/persons";
import { getAmount } from "../../../store/actions/persons";
import Pagination from "./component";

const PaginationContainer = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAmount());
  }, []);
  let totalPersons = useSelector((state) => state.persons.totalAmountPersons);
  let currentPage = useSelector(
    (state) => state.persons.currentButtonPagination
  );
  let limit = useSelector((state) => state.persons.limit);

  let numberOfPages = totalPersons.length;
  let amountOfPages = Math.ceil(numberOfPages / limit);
  let buttons = [];
  for (let i = 1; i <= amountOfPages; i++) {
    buttons.push(i);
  }
  const changeStateCurrentButton = (number) => {
    dispatch(persons.actions.setCurrentButton(number));
  };
  const setPaginationNumber = (number, limit) => {
    let offset = number * limit - limit;
    dispatch(persons.actions.setOffset(offset));
    changeStateCurrentButton(number);
    console.log(`ofset${offset}`);
    console.log(`number${number}`);
  };

  const setPaginationNumberViaArrowRight = () => {
    if (currentPage === amountOfPages) {
      currentPage = 1;
      let offset = 0;
      dispatch(persons.actions.setOffset(offset));
      changeStateCurrentButton(currentPage);
    } else {
      currentPage++;
      let offset = currentPage * limit - limit;
      dispatch(persons.actions.setOffset(offset));
      changeStateCurrentButton(currentPage);
    }
  };

  const setPaginationNumberViaArrowLeft = () => {
    if (currentPage === 1) {
      currentPage = amountOfPages;
      let offset = (currentPage - 1) * limit - limit;
      dispatch(persons.actions.setOffset(offset));
      changeStateCurrentButton(currentPage);
      console.log(`ofset${offset}`);
      console.log(`currentPage${currentPage}`);
    } else {
      currentPage--;
      let offset = currentPage * limit - limit;
      dispatch(persons.actions.setOffset(offset));
      changeStateCurrentButton(currentPage);
      console.log(`ofset${offset}`);
      console.log(`currentPage${currentPage}`);
    }
  };

  return (
    <Pagination
      limit={limit}
      currentPage={currentPage}
      buttons={buttons}
      setPaginationNumber={setPaginationNumber}
      setPaginationNumberViaArrowLeft={setPaginationNumberViaArrowLeft}
      setPaginationNumberViaArrowRight={setPaginationNumberViaArrowRight}
    />
  );
};

export const container = PaginationContainer;
