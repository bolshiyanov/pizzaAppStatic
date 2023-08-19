import React, { useEffect } from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { fetchData } from "@/store/redusers/dataReducers/fourDataReducers/fourTwoSlice";
const path = "menu/itemsFour/itemsFourTwo/";

const ItemsFourTwoFeedPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, []);
  const data = useAppSelector((state) => state.fourTwoDataSlice);

  return <ProductsFeedPageTemplate data={data} path={path} />;
};

export default ItemsFourTwoFeedPage;
