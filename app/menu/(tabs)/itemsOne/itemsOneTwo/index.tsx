import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsOne/itemsOneTwoData";
const path = "/menu/itemsOne/itemsOneTwo/";

const ItemsOneOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsOneOneFeedPage;
