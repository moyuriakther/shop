import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import cartSliceReducer from "../features/cart/cartSlice";
import searchSliceReducer from "../features/searchSlice";
import wishlistReducer from "../features/wishlist/wishSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authSliceReducer,
    cart: cartSliceReducer,
    filters: searchSliceReducer,
    wishlists: wishlistReducer,
  },
  // devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
