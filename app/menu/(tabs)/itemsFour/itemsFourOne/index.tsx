import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsFour/itemsFourOneData";
const path = "/menu/itemsFour/itemsFourOne/";

const ItemsFourOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsFourOneFeedPage;
