import { persons } from "../reducers/persons";
import Repository from "../../repository";

export const getPersons = (limit, offset) => async (dispatch) => {
  dispatch(persons.actions.setLoader(true));
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
  dispatch(persons.actions.setLoader(false));
};
export const getPerson = (id) => async (dispatch) => {
  dispatch(persons.actions.setLoader(true));
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
  dispatch(persons.actions.setLoader(false));
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
export const getRandomQuote = (random) => async (dispatch) => {
  try {
    const { value, error } =
      await Repository.PersonsActions.getRandomQuoteFromApi(random);

    if (error) {
      console.log("error getting");
    } else {
      dispatch(persons.actions.setRandomQuote(value));
    }
  } catch (error) {
    console.log(error);
  }
};
export const getPersonViaName = (name) => async (dispatch) => {
  dispatch(persons.actions.setLoader(true));
  try {
    const { value, error } =
      await Repository.PersonsActions.getPersonFromApiName(name);

    if (error) {
      console.log("error getting");
    } else {
      dispatch(persons.actions.setName(value));
    }
  } catch (error) {
    console.log(error);
  }
  dispatch(persons.actions.setLoader(false));
};

export const getAmount = (limit, offset) => async (dispatch) => {
  try {
    const { value, error } =
      await Repository.PersonsActions.getTotalPersonsFromApi();

    if (error) {
      console.log("error getting");
    } else {
      dispatch(persons.actions.setTotalAmount(value));
    }
  } catch (error) {
    console.log(error);
  }
};
export const clearTest = () => (dispatch) => {
  dispatch(persons.actions.clear());
};

export const clearNameFounded = () => (dispatch) => {
  dispatch(persons.actions.clearName());
};
