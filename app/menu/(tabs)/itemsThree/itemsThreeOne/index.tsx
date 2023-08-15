import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsThree/itemsThreeOneData";
const path = "/menu/itemsThree/itemsThreeOne/";

const ItemsThreeOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsThreeOneFeedPage;
