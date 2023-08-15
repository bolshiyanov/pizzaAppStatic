import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsFive/itemsFiveOneData";
const path = "/menu/itemsFive/itemsFiveOne/";

const ItemsFiveOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsFiveOneFeedPage;
