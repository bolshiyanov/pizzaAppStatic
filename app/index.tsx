import React, { useEffect } from "react";
import CollectionsFeedPageTemplate from "@/src/components/CollectionsFeedPageTemplate";

import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { fetchData } from "@/store/redusers/dataReducers/combineDataReducer/allDataSlice";

const AlltemsFeedPage = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchData()); // Dispatch the fetchData action when the component mounts
  }, []);
  const data = useAppSelector((state) => state.allDataSlice);

  return <CollectionsFeedPageTemplate data={data} />;
};

export default AlltemsFeedPage;