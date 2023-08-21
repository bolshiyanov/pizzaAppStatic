import React from "react";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";
import { useAppDispatch } from "@/src/utils/hooks/redux";
import { TouchableOpacity, StyleSheet } from "react-native";
import { tintColorLight } from "@/constants/Colors";
import Trush from "@/assets/images/svg/icons/trash-can-solid.svg";

interface RemoveFromWishListDispatchProps {
  id: string;
  model: string;
  onClick: () => void;
}

const RemoveFromWishListDispatch: React.FC<RemoveFromWishListDispatchProps> = ({
  id,
  model,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  const { removeFromWishList } = wishListSlice.actions;

  const remove = () => {
    dispatch(removeFromWishList(id)); // Use the passed id
    onClick();
  };

  return (
    model === "icon" && (
      <TouchableOpacity style={styles.deleteIcon} onPress={remove}>
        <Trush width={28} height={28} fill={tintColorLight} />
      </TouchableOpacity>
    )
  );
};

const styles = StyleSheet.create({
  deleteIcon: {
    position: "absolute",
    right: 10,
  },
});

export default RemoveFromWishListDispatch;
