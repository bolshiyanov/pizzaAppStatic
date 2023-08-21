import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";
import Trush from "@/assets/images/svg/icons/trash-can-solid.svg";
import Heart from "@/assets/images/svg/icons/heart-solid.svg";
import { tintColorLight } from "@/constants/Colors";

interface AddToWishListProps {
  id: string;
}

export default function AddToWishListInSearch(props: AddToWishListProps) {
  const { id } = props;

  const { addToWishList, removeFromWishList } = wishListSlice.actions;

  const { items: wishList } = useAppSelector((state) => state.wishListSlice);

  const dispatch = useAppDispatch();

  const subscribe = () => {
    dispatch(addToWishList(id));
  };

  const unsubscribe = () => {
    dispatch(removeFromWishList(id));
  };

  const hasItemInWishList = wishList.includes(id);

  if (!id) {
    return null;
  }

  return (
    <>
      <Pressable
        style={styles.iconContainer}
        onPress={hasItemInWishList ? unsubscribe : subscribe}
      >
        {hasItemInWishList ? (
          <Heart width={28} height={28} fill={tintColorLight} />
        ) : (
          <Heart width={28} height={28} fill="black" />
        )}
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: "absolute",
    right: 0,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 70,
  },
});
