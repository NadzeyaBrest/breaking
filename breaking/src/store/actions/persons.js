import { persons } from "../reducers/persons";
import Repository from "../../repository";

export const getPersons = () => async (dispatch) => {
  try {
    const { value, error } =
      await Repository.PersonsActions.getPersonsFromApi();
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
