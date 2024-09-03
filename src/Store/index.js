import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { isHomeScreenActive: true, isCrewActive: false };

const pageSlice = createSlice({
  initialState,
  name: "page",
  reducers: {
    setHomeScreenActive(state, action) {
      state.isHomeScreenActive = action.payload;
    },
    setCrewActive(state, action) {
      state.isCrewActive = action.payload;
    },
  },
});

const store = configureStore({
  reducer: { page: pageSlice.reducer },
});

export const { setHomeScreenActive, setCrewActive } = pageSlice.actions;
export default store;
