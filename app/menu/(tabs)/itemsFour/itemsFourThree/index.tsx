import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsFour/itemsFourThreeData";
const path = "/menu/itemsFour/itemsFourThree/";

const ItemsFourOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsFourOneFeedPage;
