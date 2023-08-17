import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsFourTwoData from "@/data/menu/ItemsFour/itemsFourTwoData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const fourTwoDataSlice = createSlice({
  name: "FourTwoData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsFourTwoData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = fourTwoDataSlice.actions;

export default fourTwoDataSlice.reducer;
