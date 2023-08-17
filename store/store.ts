import { combineReducers, configureStore } from "@reduxjs/toolkit";
import wishListSlice from "@/store/redusers/wishListReducer/wishListSlice";
import allDataSlice from "./redusers/dataReducers/combineDataReducer/allDataSlice";
 
import oneOneDataSlice from "@/store/redusers/dataReducers/oneDataReducers/oneOneSlice";
import oneTwoDataSlice from "@/store/redusers/dataReducers/oneDataReducers/oneTwoSlice";
import oneThreeDataSlice from "@/store/redusers/dataReducers/oneDataReducers/oneThreeSlice";

import twoOneDataSlice from "@/store/redusers/dataReducers/twoDataReducers/twoOneSlice";
import twoTwoDataSlice from "@/store/redusers/dataReducers/twoDataReducers/twoTwoSlice";
import twoThreeDataSlice from "@/store/redusers/dataReducers/twoDataReducers/twoThreeSlice";

import threeOneDataSlice from "@/store/redusers/dataReducers/threeDataReducers/threeOneSlice";
import threeTwoDataSlice from "@/store/redusers/dataReducers/threeDataReducers/threeTwoSlice";
import threeThreeDataSlice from "@/store/redusers/dataReducers/threeDataReducers/threeThreeSlice";

import fourOneDataSlice from "@/store/redusers/dataReducers/fourDataReducers/fourOneSlice";
import fourTwoDataSlice from "@/store/redusers/dataReducers/fourDataReducers/fourTwoSlice";
import fourThreeDataSlice from "@/store/redusers/dataReducers/fourDataReducers/fourThreeSlice";

import fiveOneDataSlice from "@/store/redusers/dataReducers/fiveDataReducers/fiveOneSlice";
import fiveTwoDataSlice from "@/store/redusers/dataReducers/fiveDataReducers/fiveTwoSlice";
import fiveThreeDataSlice from "@/store/redusers/dataReducers/fiveDataReducers/fiveThreeSlice";

const rootReducer = combineReducers({
  wishListSlice,
  allDataSlice,

  oneOneDataSlice,
  oneTwoDataSlice,
  oneThreeDataSlice,
  
  twoOneDataSlice,
  twoTwoDataSlice,
  twoThreeDataSlice,

  threeOneDataSlice,
  threeTwoDataSlice,
  threeThreeDataSlice,

  fourOneDataSlice,
  fourTwoDataSlice,
  fourThreeDataSlice,

  fiveOneDataSlice,
  fiveTwoDataSlice,
  fiveThreeDataSlice,
 
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];