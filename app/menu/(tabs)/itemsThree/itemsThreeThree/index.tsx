import React, { useEffect } from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { fetchData } from "@/store/redusers/dataReducers/threeDataReducers/threeThreeSlice";

const path = "/menu/itemsThree/itemsThreeThree/";

const ItemsThreeOneFeedPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, []);
  const data = useAppSelector((state) => state.threeThreeDataSlice);

  return <ProductsFeedPageTemplate data={data} path={path} />;
};

export default ItemsThreeOneFeedPage;
