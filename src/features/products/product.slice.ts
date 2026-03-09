import { createSlice } from "@reduxjs/toolkit";
//types
import { type FilterData } from "../../types/types";

const initialState: FilterData = {
  title: "",
  category: "",
  filterBy: "",
  price: "",
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setFilterData: (state, action) => {
      const { name, value } = action.payload;
      state[name as keyof FilterData] = value;
    },
    resetFilterData: () => initialState,
  },
});

export const { setFilterData, resetFilterData } = productSlice.actions;

export default productSlice.reducer;
