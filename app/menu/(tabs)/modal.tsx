import React from "react";
import Remove from "@/src/components/removeFromWishList";
import { useAppSelector } from "@/src/utils/hooks/redux";

const WishListCoffeeComponent = () => {
  const data = useAppSelector((state) => state.allDataSlice);

  return (
    <Remove data={data} />    
  );
};

export default WishListCoffeeComponent;
