import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState: [],
  name: "cartslice",
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.find((ele) => ele.id === action.payload.id);
      console.log("Found Product: ", findProduct);

      if (findProduct) {
        findProduct.quantity += 1;
      } else {
        const productClone = { ...action.payload, quantity: 1 };
        state.push(productClone);
        // console.log(productClone);
      }
    },
    deleteFromCart: (state, action) => {
      return state.filter((ele) => ele.id !== action.payload.id);
    },
    clearCart: (state, action) => {
      return [];
    },
  },
});
export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
