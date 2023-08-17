import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsoneThreeData from "@/data/menu/ItemsOne/itemsOneThreeData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const oneThreeDataSlice = createSlice({
  name: "oneThreeData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsoneThreeData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = oneThreeDataSlice.actions;

export default oneThreeDataSlice.reducer;
