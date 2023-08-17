import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsFiveTwoData from "@/data/menu/ItemsFive/itemsFiveTwoData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const fiveTwoDataSlice = createSlice({
  name: "FiveTwoData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsFiveTwoData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = fiveTwoDataSlice.actions;

export default fiveTwoDataSlice.reducer;
