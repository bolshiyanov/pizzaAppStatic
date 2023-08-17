import React from "react";
import { View, StyleSheet } from "react-native";
import { useAppSelector } from "@/src/utils/hooks/redux";

import Heart from '@/assets/images/svg/icons/heart-solid.svg'

import { tintColorLight } from "@/constants/Colors";

interface IndicatorProps {
  id: string;
}

export default function Indicator(props: IndicatorProps) {
  const { id } = props;
  
  const { items: wishList } = useAppSelector((state) => state.wishListSlice);

  const hasItemInWishList = wishList.includes(id);

  if (!hasItemInWishList) {
    return null;
  }

  if (!id) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.icon1}>
      <Heart width={30} height={30} fill={'white'}/>
      </View>
      <View style={styles.icon2}>
      <Heart width={26} height={26} fill={tintColorLight}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  icon1: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  icon2: {
    position: "absolute",
    top: 2,
    right: 2,
  },
});
