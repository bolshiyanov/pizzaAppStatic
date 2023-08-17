import React, { useEffect } from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { fetchData } from "@/store/redusers/dataReducers/fourDataReducers/fourThreeSlice";

const path = "/menu/itemsFour/itemsFourThree/";

const ItemsFourOneFeedPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, []);
  const data = useAppSelector((state) => state.fourThreeDataSlice);

  return <ProductsFeedPageTemplate data={data} path={path} />;
};

export default ItemsFourOneFeedPage;
