import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  category: string;
  priceRange: [number, number];
}

const initialState: FilterState = {
  category: "",
  priceRange: [0, 1000],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory(state, action: PayloadAction<string>) {
      state.category = action.payload;
    },
    setPriceRange(state, action: PayloadAction<[number, number]>) {
      state.priceRange = action.payload;
    },
  },
});

export const { setCategory, setPriceRange } = filterSlice.actions;
export default filterSlice.reducer;
