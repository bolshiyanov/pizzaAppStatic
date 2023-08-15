import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsOne/itemsOneThreeData";
const path = "/menu/itemsOne/itemsOneThree/";

const ItemsOneOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsOneOneFeedPage;
