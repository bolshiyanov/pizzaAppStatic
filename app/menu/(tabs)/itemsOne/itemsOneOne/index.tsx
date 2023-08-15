import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsOne/itemsOneOneData";
const path = "/menu/itemsOne/itemsOneOne/";

const ItemsOneOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsOneOneFeedPage;
