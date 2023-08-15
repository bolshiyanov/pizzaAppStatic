import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsFour/itemsFourTwoData";
const path = "/menu/itemsFour/itemsFourTwo/";

const ItemsFourOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsFourOneFeedPage;
