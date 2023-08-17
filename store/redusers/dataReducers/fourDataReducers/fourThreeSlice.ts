import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";
import itemsFourThreeData from "@/data/menu/ItemsFour/itemsFourThreeData";

interface MyDateState extends MenuTypelInterface {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const fourThreeDataSlice = createSlice({
  name: "FourThreeData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      state.push(...action.payload);
    },
    fetchData: (state) => {
      state.push(...itemsFourThreeData); // Make sure you have myData properly imported
    },
  },
});

export const { addData, fetchData } = fourThreeDataSlice.actions;

export default fourThreeDataSlice.reducer;
