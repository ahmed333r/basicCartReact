import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productsSlice";
import cartReducer from "./slices/cartSlice";
export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});
