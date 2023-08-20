import React from "react";
import ProductDetailsTemplate from "@/src/components/ProductDetailsTemplate";

import data from "@/data/menu/ItemsFive/itemsFiveThreeData";

const ProductPage = () => {
  return <ProductDetailsTemplate data={data} />;
};

export default ProductPage;

// Static exports settings

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  return Promise.resolve(data.map((item) => ({ name: item.name })));
}
