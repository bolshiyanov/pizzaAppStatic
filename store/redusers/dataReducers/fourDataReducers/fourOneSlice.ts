import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsFourOneData from "@/data/menu/ItemsFour/itemsFourOneData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const fourOneDataSlice = createSlice({
  name: "FourOneData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsFourOneData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = fourOneDataSlice.actions;

export default fourOneDataSlice.reducer;
