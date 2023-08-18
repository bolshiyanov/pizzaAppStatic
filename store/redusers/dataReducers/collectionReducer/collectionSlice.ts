import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TransformInterface } from "@/types/transformType";

interface MyDateState extends TransformInterface  {
  // You can add any additional properties specific to your use case here
}
const initialState: MyDateState[] = [];

export const collectiosSlice = createSlice({
  name: "collectionsData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<TransformInterface []>) => {
      state.push(...action.payload);
    },
  },
});

export const { addData } = collectiosSlice.actions;

export default collectiosSlice.reducer;
