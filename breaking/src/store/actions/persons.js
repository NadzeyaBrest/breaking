import { persons } from "../reducers/persons";
import Repository from "../../repository";

export const getPersons = (limit, offset) => async (dispatch) => {
  try {
    const { value, error } = await Repository.PersonsActions.getPersonsFromApi(
      limit,
      offset
    );
    if (error) {
      console.log("error getting");
    } else {
      dispatch(persons.actions.setPersons(value));
    }
  } catch (error) {
    console.log(error);
  }
};
export const getPerson = (id) => async (dispatch) => {
  try {
    const { value, error } = await Repository.PersonsActions.getPersonFromApi(
      id
    );

    if (error) {
      console.log("error getting");
    } else {
      dispatch(persons.actions.setPerson(value));
    }
  } catch (error) {
    console.log(error);
  }
};
export const getQuote = (id) => async (dispatch) => {
  try {
    const { value, error } = await Repository.PersonsActions.getQuoteFromApi(
      id
    );

    if (error) {
      console.log("error getting");
    } else {
      dispatch(persons.actions.setQuote(value));
    }
  } catch (error) {
    console.log(error);
  }
};
