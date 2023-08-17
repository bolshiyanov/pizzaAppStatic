import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsFiveOneData from "@/data/menu/ItemsFive/itemsFiveOneData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const fiveOneDataSlice = createSlice({
  name: "FiveOneData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsFiveOneData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = fiveOneDataSlice.actions;

export default fiveOneDataSlice.reducer;
