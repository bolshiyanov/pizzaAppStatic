import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsOneOneData from "@/data/menu/ItemsOne/itemsOneOneData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const oneOneDataSlice = createSlice({
  name: "OneOneData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsOneOneData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = oneOneDataSlice.actions;

export default oneOneDataSlice.reducer;
