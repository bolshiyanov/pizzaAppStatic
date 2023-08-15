import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsFive/itemsFiveThreeData";
const path = "/menu/itemsFive/itemsFiveThree/";

const ItemsFiveOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsFiveOneFeedPage;
