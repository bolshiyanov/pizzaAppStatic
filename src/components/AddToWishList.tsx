import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";

import { tintColorLight } from "@/constants/Colors";

interface AddToWishListProps {
  id: string;
}

export default function AddToWishList(props: AddToWishListProps) {
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
    <View style={styles.buttonContainer}>
      <Pressable
        style={hasItemInWishList ? styles.buttonRemove : styles.button}
        onPress={hasItemInWishList ? unsubscribe : subscribe}
      >
        <Text style={styles.text}>
          {hasItemInWishList ? "Remove from wish list" : "Add to wish list"}
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    marginVertical: 1,
  },

  button: {
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    
    fontWeight: 600,
    borderWidth: 2,
    borderColor: tintColorLight,
    borderStyle: 'solid'
  },
  buttonRemove: {
    width:'100%',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: "#cccccc",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: tintColorLight,
  },
  iconButton: {
    alignItems: "center",
    justifyContent: "center",
    padding: 12,
    borderRadius: 4,
    backgroundColor: "tintColorLight",
  },
});
