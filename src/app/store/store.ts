import { configureStore } from "@reduxjs/toolkit";
//rudux-slicer
import filterReducer from "../../features/productFilter/productFilter";
import authReducer from "../../features/auth/auth.slicer";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
