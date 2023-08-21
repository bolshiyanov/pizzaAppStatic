import React from "react";
import { Link } from "expo-router";
import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";
import { tintColorLight } from "@/constants/Colors";
import Trush from "@/assets/images/svg/icons/trash-can-solid.svg";
import {
  Pressable,
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";
import isProduction from "@/src/utils/isProdaction";

const { removeFromWishList } = wishListSlice.actions;

const Page = () => {
  const data = useAppSelector((state) => state.allDataSlice);
  const { items: wishList } = useAppSelector((state) => state.wishListSlice);
  
  const wishListData = data.filter((item) => wishList.includes(item.id));
  
  const dispatch = useAppDispatch();

  return (
    <>
      {wishListData.map((item) => (
        <Link
          key={item.id}
          href={`/${
            isProduction
              ? item.path + "/" + item.name + ".html"
              : item.path + "/" + item.name
          }`}
          asChild
        >
          <Pressable style={styles.cardContainer} key={item.id}>
            <Image style={styles.image} source={{ uri: item.image }} />

            <View>
              <Text style={styles.title}>{item.name}</Text>
              <Text style={styles.subTitle}>{item.path}</Text>
            </View>

            <TouchableOpacity
              style={styles.deleteIcon}
              onPress={() => dispatch(removeFromWishList(item.id))}
            >
              <Trush width={28} height={28} fill={tintColorLight} />
            </TouchableOpacity>
          </Pressable>
        </Link>
      ))}
    </>
  );
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    width: "100%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    color: "gray",
  },
  deleteIcon: {
    position: "absolute",
    right: 10,
  },
});

export default Page;
