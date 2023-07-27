import { createSlice } from "@reduxjs/toolkit";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const existingProductIndex = state.favorites.findIndex(
        (product) => product.id !== action.payload.id
      );
      console.log(existingProductIndex);
      if (existingProductIndex === -1) {
        state.favorites.push(action.payload);
      } else {
        //   state.favorites.splice(existingProductIndex, 1);
        state.favorites;
      }
    },
  },
});

export const { addToFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;
