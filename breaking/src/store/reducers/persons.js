import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  persons: [],
  person: {},
  limit: 15,
  offset: 0,
  quote: {},
  randomQuote: {},
  name: [],
  currentButtonPagination: 1,
  totalAmountPersons: [],
  isLoading: false,
  toggled: true,
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

    setTotalAmount(state, { payload }) {
      state.totalAmountPersons = payload;
    },
    setCurrentButton(state, { payload }) {
      state.currentButtonPagination = payload;
    },
    setRandomQuote(state, { payload }) {
      state.randomQuote = payload;
    },
    clear(state) {
      state.person = {};
    },
    clearName(state) {
      state.name = [];
    },
    setLoader(state, { payload }) {
      state.isLoading = payload;
    },
    setToggledIntoState(state, { payload }) {
      state.toggled = payload;
    },
  },
});
export default persons.reducer;
