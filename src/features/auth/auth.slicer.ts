import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

//types
import type { Token } from "../../types/types";

const initialState: Token = {
  accessToken: window.localStorage.getItem("accessToken") || "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.accessToken = action.payload;
    },
    clearToken(state) {
      state.accessToken = "";
    },
  },
});

export const { setToken, clearToken } = authSlice.actions;
export default authSlice.reducer;
