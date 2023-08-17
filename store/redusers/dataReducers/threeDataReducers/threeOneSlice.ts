import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsThreeOneData from "@/data/menu/ItemsThree/itemsThreeOneData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const threeOneDataSlice = createSlice({
  name: "ThreeOneData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsThreeOneData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = threeOneDataSlice.actions;

export default threeOneDataSlice.reducer;
