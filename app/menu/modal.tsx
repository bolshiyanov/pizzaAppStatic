import React from "react";
import Remove from "@/src/components/removeFromWishList";

import itemOneOneData from "@/data/menu/ItemsOne/itemsOneOneData";
import itemOneTwoData from "@/data/menu/ItemsOne/itemsOneTwoData";
import itemOneThreeData from "@/data/menu/ItemsOne/itemsOneThreeData";

import itemTwoOneData from "@/data/menu/ItemsTwo/itemsTwoOneData";
import itemTwoTwoData from "@/data/menu/ItemsTwo/itemsTwoTwoData";
import itemTwoThreeData from "@/data/menu/ItemsTwo/itemsTwoThreeData";

import itemThreeOneData from "@/data/menu/ItemsThree/itemsThreeOneData";
import itemThreeTwoData from "@/data/menu/ItemsThree/itemsThreeTwoData";
import itemThreeThreeData from "@/data/menu/ItemsThree/itemsThreeThreeData";

import itemFourOneData from "@/data/menu/ItemsFour/itemsFourOneData";
import itemFourTwoData from "@/data/menu/ItemsFour/itemsFourTwoData";
import itemFourThreeData from "@/data/menu/ItemsFour/itemsFourThreeData";

import itemFiveOneData from "@/data/menu/ItemsFive/itemsFiveOneData";
import itemFiveTwoData from "@/data/menu/ItemsFive/itemsFiveTwoData";
import itemFiveThreeData from "@/data/menu/ItemsFive/itemsFiveThreeData";

const WishListCoffeeComponent = () => {
  return (
    <>
      {/* 1 */}
      <Remove data={itemOneOneData} />
      <Remove data={itemOneTwoData} />
      <Remove data={itemOneThreeData} />
      {/* 2 */}
      <Remove data={itemTwoOneData} />
      <Remove data={itemTwoTwoData} />
      <Remove data={itemTwoThreeData} />
      {/* 3 */}
      <Remove data={itemThreeOneData} />
      <Remove data={itemThreeTwoData} />
      <Remove data={itemThreeThreeData} />
      {/* 4 */}
      <Remove data={itemFourOneData} />
      <Remove data={itemFourTwoData} />
      <Remove data={itemFourThreeData} />
      {/* 5 */}
      <Remove data={itemFiveOneData} />
      <Remove data={itemFiveTwoData} />
      <Remove data={itemFiveThreeData} />
    </>
  );
};

export default WishListCoffeeComponent;
