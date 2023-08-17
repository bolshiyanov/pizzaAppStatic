import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsTwoTwoData from "@/data/menu/ItemsTwo/itemsTwoTwoData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const twoTwoDataSlice = createSlice({
  name: "TwoTwoData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsTwoTwoData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = twoTwoDataSlice.actions;

export default twoTwoDataSlice.reducer;
