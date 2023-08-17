import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsTwoThreeData from "@/data/menu/ItemsTwo/itemsTwoThreeData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const twoThreeDataSlice = createSlice({
  name: "TwoThreeData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsTwoThreeData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = twoThreeDataSlice.actions;

export default twoThreeDataSlice.reducer;
