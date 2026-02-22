import { configureStore } from "@reduxjs/toolkit";
//rudux-slicer
import filterReducer from "../../features/productFilter/productFilter";

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
