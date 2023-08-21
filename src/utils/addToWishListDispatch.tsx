import React from "react";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";
import { useAppDispatch } from "@/src/utils/hooks/redux";
import { TouchableOpacity, StyleSheet } from "react-native";
import { tintColorLight } from "@/constants/Colors";
import Heart from "@/assets/images/svg/icons/heart-solid.svg";

interface AddToWishListDispatchProps {
  id: string;
  model: string;
  onClick: () => void;
}

const AddToWishListDispatch: React.FC<AddToWishListDispatchProps> = ({
  id,
  model,
  onClick,
}) => {
  const dispatch = useAppDispatch();
  const { addToWishList } = wishListSlice.actions;

  const remove = () => {
    dispatch(addToWishList(id)); // Use the passed id
    onClick();
  };

  return (
    model === "icon" && (
      <TouchableOpacity style={styles.deleteIcon} onPress={remove}>
        <Heart width={28} height={28} fill={tintColorLight} />
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

export default AddToWishListDispatch;
