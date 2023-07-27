import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlists",
  initialState: {
    wishlistItems: localStorage.getItem("wishlistItems")
      ? JSON.parse(localStorage.getItem("wishlistItems"))
      : [],
  },
  reducers: {
    addToWishlist: (state, action) => {
      // check product exists
      let existsItem = state.wishlistItems?.findIndex(
        (item) => item._id === action.payload?._id
      );

      if (existsItem >= 0) {
        alert("already added in wishlist");
      } else {
        let setWishlistItem = { ...action.payload };
        state.wishlistItems?.push(setWishlistItem);

        //set wishlist item to localStorage
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
      }
    },
    removeFromWishlist: (state, action) => {
      state.wishlistItems = state?.wishlistItems?.filter(
        (item) => item?._id !== action.payload?._id
      );
      //update wishlist item to localStorage
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
    clearAllWishlist: (state) => {
      state.wishlistItems = [];
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearAllWishlist } =
  wishlistSlice.actions;
export default wishlistSlice.reducer;
