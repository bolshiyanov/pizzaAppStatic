import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsFiveThreeData from "@/data/menu/ItemsFive/itemsFiveThreeData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const fiveThreeDataSlice = createSlice({
  name: "FiveThreeData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsFiveThreeData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = fiveThreeDataSlice.actions;

export default fiveThreeDataSlice.reducer;
