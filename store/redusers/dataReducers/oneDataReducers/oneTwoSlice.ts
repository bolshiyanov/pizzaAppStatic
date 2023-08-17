import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsoneTwoData from "@/data/menu/ItemsOne/itemsOneTwoData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const oneTwoDataSlice = createSlice({
  name: "OneTwoData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsoneTwoData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = oneTwoDataSlice.actions;

export default oneTwoDataSlice.reducer;
