import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsThree/itemsThreeTwoData";
const path = "/menu/itemsThree/itemsThreeTwo/";

const ItemsThreeOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsThreeOneFeedPage;
