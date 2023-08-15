import React from "react";
import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";
import { wishListSlice } from "@/store/redusers/wishListReducer/wishListSlice";
import { tintColorLight } from "@/constants/Colors";
import Trush from '@/assets/images/svg/icons/trash-can-solid.svg';
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from "react-native";


interface dataItemInterface {
  id: string;
  name: string;
  firstType: string;
  image: string;
 
}

const { removeFromWishList } = wishListSlice.actions;

const Page = ({ data }: { data: dataItemInterface[] }) => {
  const { items: wishList } = useAppSelector((state) => state.wishListReducer);
  const wishCaffeAlcoholDataNew = data.filter((item) =>
    wishList.includes(item.id)
  );
  const dispatch = useAppDispatch();

  const unsubscribe = (id: string) => {
    dispatch(removeFromWishList(id));
  };

  return (
    <View>
      {wishCaffeAlcoholDataNew.map((item) => (
        <View style={styles.cardContainer} key={item.id}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <View>
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.subTitle}>{item.firstType}</Text> 
          </View>
          <TouchableOpacity
            style={styles.deleteIcon}
            onPress={() => unsubscribe(item.id)}
          >
            <Trush width={28} height={28} fill={ tintColorLight}/>
          </TouchableOpacity>
        </View>
      ))}
    </View>
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
