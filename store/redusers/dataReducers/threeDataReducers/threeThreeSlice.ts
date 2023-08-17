import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsThreeThreeData from "@/data/menu/ItemsThree/itemsThreeThreeData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const threeThreeDataSlice = createSlice({
  name: "ThreeThreeData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsThreeThreeData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = threeThreeDataSlice.actions;

export default threeThreeDataSlice.reducer;
