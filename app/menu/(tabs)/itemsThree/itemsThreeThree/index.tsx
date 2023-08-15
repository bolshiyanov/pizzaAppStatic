import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsThree/itemsThreeThreeData";
const path = "/menu/itemsThree/itemsThreeThree/";

const ItemsThreeOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsThreeOneFeedPage;
