import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsTwo/itemsTwoThreeData";
const path = "/menu/itemsTwo/itemsTwoThree/";

const ItemsTwoOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsTwoOneFeedPage;
