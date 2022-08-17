import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
  person: {},
  limit: 15,
  offset: 0,
  quote: {},
  name: [],
  currentButtonPagination: 1,
  totalAmountPersons: [],
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
    setLimit(state, { payload }) {
      state.limit = payload;
    },
    setOffset(state, { payload }) {
      state.offset = payload;
    },
    setQuote(state, { payload }) {
      state.quote = payload;
    },
    setName(state, { payload }) {
      state.name = payload;
    },
    resetName(state, { payload }) {
      state.name = payload;
    },
    setTotalAmount(state, { payload }) {
      state.totalAmountPersons = payload;
    },
    setCurrentButton(state, { payload }) {
      state.currentButtonPagination = payload;
    },
  },
});
export default persons.reducer;
