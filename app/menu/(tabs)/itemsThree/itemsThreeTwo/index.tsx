import React, { useEffect } from 'react';
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import {fetchData } from "@/store/redusers/dataReducers/threeDataReducers/threeTwoSlice";

const path = "/menu/itemsThree/itemsThreeTwo/";

const ItemsThreeOneFeedPage = () => {

  const dispatch = useAppDispatch();  
  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, []);
  const data = useAppSelector((state) => state.threeTwoDataSlice);
  

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsThreeOneFeedPage;
