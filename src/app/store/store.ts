import { configureStore } from "@reduxjs/toolkit";
//rudux-slicer
import authReducer from "../../features/auth/auth.slicer";
import productFilterReducer from "../../features/products/product.slice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    product: productFilterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
