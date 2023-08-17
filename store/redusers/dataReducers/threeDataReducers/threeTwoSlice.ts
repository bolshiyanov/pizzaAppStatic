import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsThreeTwoData from "@/data/menu/ItemsThree/itemsThreeTwoData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const threeTwoDataSlice = createSlice({
  name: "ThreeTwoData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsThreeTwoData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = threeTwoDataSlice.actions;

export default threeTwoDataSlice.reducer;
