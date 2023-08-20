import React from "react";
import ProductDetailsTemplate from "@/src/components/ProductDetailsTemplate";

import { useAppSelector } from "@/src/utils/hooks/redux";

const ProductPage = () => {
  const data = useAppSelector((state) => state.allDataSlice);

  return <ProductDetailsTemplate data={data} />;
};

export default ProductPage;
