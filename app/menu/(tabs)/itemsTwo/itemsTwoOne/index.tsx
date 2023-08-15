import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsTwo/itemsTwoOneData";
const path = "/menu/itemsTwo/itemsTwoOne/";

const ItemsTwoOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsTwoOneFeedPage;
