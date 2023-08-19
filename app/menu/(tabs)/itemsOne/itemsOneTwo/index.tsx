import React, { useEffect } from 'react';
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import {fetchData } from "@/store/redusers/dataReducers/oneDataReducers/oneTwoSlice";

const path = "menu/itemsOne/itemsOneTwo/";

const ItemsOneOneFeedPage = () => {

  const dispatch = useAppDispatch();  
  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, []);
  const data = useAppSelector((state) => state.oneTwoDataSlice);

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsOneOneFeedPage;
