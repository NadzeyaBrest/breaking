import { configureStore, combineReducers } from "@reduxjs/toolkit";
import persons from "./reducers/persons";

const reducer = combineReducers({ persons });

export const setupStore = () => {
  return configureStore({ reducer });
};
export default setupStore;
