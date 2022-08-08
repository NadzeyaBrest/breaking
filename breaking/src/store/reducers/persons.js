import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
  person: [],
};

export const persons = createSlice({
  name: "persons",
  initialState,
  reducers: {
    setPersons(state, { payload }) {
      state.persons = payload;
    },
    setPerson(state, { payload }) {
      state.chosenPerson = payload;
    },
  },
});
export default persons.reducer;