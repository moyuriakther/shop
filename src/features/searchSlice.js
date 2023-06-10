import { createSlice } from "@reduxjs/toolkit";

export const searchSlice = createSlice({
  name: "filters",
  initialState: {
    search: "",
  },
  reducers: {
    updateFilters: (state, action) => {
      // console.log(action);
      return { ...state, ...action.payload };
    },
  },
});
export const { updateFilters } = searchSlice.actions;
export default searchSlice.reducer;
