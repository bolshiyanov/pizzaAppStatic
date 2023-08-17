import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsTwoOneData from "@/data/menu/ItemsTwo/itemsTwoOneData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const twoOneDataSlice = createSlice({
  name: "TwoOneData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsTwoOneData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = twoOneDataSlice.actions;

export default twoOneDataSlice.reducer;
