import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
  person: {},
  limit: 9,
};

export const persons = createSlice({
  name: "persons",
  initialState,
  reducers: {
    setPersons(state, { payload }) {
      state.persons = payload;
    },
    setPerson(state, { payload }) {
      state.person = payload;
    },
  },
});
export default persons.reducer;
