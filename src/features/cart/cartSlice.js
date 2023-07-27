import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // console.log(action.payload);
      //check product existence
      const isProductExist = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?.product?._id
      );
      //if product exist increase quantity
      if (isProductExist >= 0) {
        state.cartItems[isProductExist].qty += 1;
      } else {
        //if product quantity given by user
        if (action.payload.qty > 1) {
          state.cartItems.push({ ...action.payload, qty: action.payload.qty });
        } else {
          //if product quantity default 1
          state.cartItems.push({ ...action.payload, qty: 1 });
        }
        //set to localStorage
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (x) => x?.product._id !== action.payload.product._id
      );
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    incrementQuantity: (state, action) => {
      // console.log(action.payload);
      //check product existence
      const isProductExist = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?.product?._id
      );
      //if product exist increase quantity
      if (isProductExist >= 0) {
        state.cartItems[isProductExist].qty += 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }
    },
    decrementQuantity: (state, action) => {
      // console.log(action.payload);
      //check product existence
      const isProductExist = state.cartItems.findIndex(
        (item) => item?.product?._id === action.payload?.product?._id
      );
      //if product exist increase quantity
      if (isProductExist >= 0) {
        state.cartItems[isProductExist].qty -= 1;
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      }

      if (state.cartItems[isProductExist].qty === 0) {
        state.cartItems = state.cartItems.filter(
          (item) =>
            item.product?._id !== state.cartItems[isProductExist].product?._id
        );
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    clearCart: (state) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    calculateTotalAmount: (state) => {
      let subTotal = state.cartItems.reduce(
        (acc, item) => acc + item.product?.price * item.qty,
        0
      );
      // console.log(subTotal);
      state.cartTotalAmount = Number(subTotal);
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
  calculateTotalAmount,
} = cartSlice.actions;
export default cartSlice.reducer;
