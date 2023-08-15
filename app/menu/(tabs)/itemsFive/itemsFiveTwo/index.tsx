import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsFive/itemsFiveTwoData";
const path = "/menu/itemsFive/itemsFiveTwo/";

const ItemsFiveOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsFiveOneFeedPage;
