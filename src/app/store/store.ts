import { configureStore } from "@reduxjs/toolkit";
//rudux-slicer
import authReducer from "../../features/auth/auth.slicer";

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
