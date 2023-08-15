import React from "react";
import ProductsFeedPageTemplate from "@/src/components/ProductsFeedPageTemplate";

import data from "@/data/menu/ItemsTwo/itemsTwoTwoData";
const path = "/menu/itemsTwo/itemsTwoTwo/";

const ItemsTwoOneFeedPage = () => {

  return (
    <ProductsFeedPageTemplate data={data} path={path} />
  );
};

export default ItemsTwoOneFeedPage;
