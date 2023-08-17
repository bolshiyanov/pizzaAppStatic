import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MenuTypelInterface } from "@/types/menuType";

import itemsOneOneData from "@/data/menu/ItemsOne/itemsOneOneData";
import itemsoneTwoData from "@/data/menu/ItemsOne/itemsOneTwoData";
import itemsoneThreeData from "@/data/menu/ItemsOne/itemsOneThreeData";

import itemsTwoOneData from "@/data/menu/ItemsTwo/itemsTwoOneData";
import itemsTwoTwoData from "@/data/menu/ItemsTwo/itemsTwoTwoData";
import itemsTwoThreeData from "@/data/menu/ItemsTwo/itemsTwoThreeData";

import itemsThreeOneData from "@/data/menu/ItemsThree/itemsThreeOneData";
import itemsThreeTwoData from "@/data/menu/ItemsThree/itemsThreeTwoData";
import itemsThreeThreeData from "@/data/menu/ItemsThree/itemsThreeThreeData";

import itemsFourOneData from "@/data/menu/ItemsFour/itemsFourOneData";
import itemsFourTwoData from "@/data/menu/ItemsFour/itemsFourTwoData";
import itemsFourThreeData from "@/data/menu/ItemsFour/itemsFourThreeData";

import itemsFiveOneData from "@/data/menu/ItemsFive/itemsFiveOneData";
import itemsFiveTwoData from "@/data/menu/ItemsFive/itemsFiveTwoData";
import itemsFiveThreeData from "@/data/menu/ItemsFive/itemsFiveThreeData";

interface MyDateState extends MenuTypelInterface {
}

const initialState: MyDateState[] = [];

export const allDataSlice = createSlice({
  name: "allData",
  initialState,
  reducers: {
    addData: (state, action: PayloadAction<MenuTypelInterface[]>) => {
      return [...state, ...action.payload];
    },
    fetchData: (state) => {
      return [...state, ...itemsOneOneData, ...itemsoneTwoData, ...itemsoneThreeData,
    ...itemsTwoOneData, ...itemsTwoTwoData, ...itemsTwoThreeData, ...itemsThreeOneData,
...itemsThreeTwoData, ...itemsThreeThreeData, ...itemsFourOneData, ...itemsFourTwoData,
...itemsFourThreeData, ...itemsFiveOneData, ...itemsFiveTwoData, ...itemsFiveThreeData];
    },
  },
});

export const { addData, fetchData } = allDataSlice.actions;

export default allDataSlice.reducer;
