import { Link } from "expo-router";
import React from "react";
import isProduction from "@/src/utils/isProdaction";
import { useAppSelector } from "@/src/utils/hooks/redux";

import {
  ActivityIndicator,
  StyleSheet,
  Image,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";
import { MenuTypelInterface } from "@/types/menuType";
import { TransformInterface } from "@/types/transformType";

import groupAndTransformDatafirstType from "../utils/transformData/transformData";
import groupAndTransformDataSecondType from "../utils/transformData/transformSecondData";
import groupAndTransformDataThirdType from "../utils/transformData/transformThirdData";

interface ProductsFeedPagelInterface {
  data: MenuTypelInterface[];
}

const wishListType = "wish_list";

const CollectionsFeedPageTemplate: React.FC<ProductsFeedPagelInterface> = ({
  data,
}) => {
  const wishListData = useAppSelector((state) => state.wishListSlice);
  const allData = useAppSelector((state) => state.allDataSlice);

  const allWishListData = allData.filter((item) =>
    wishListData.items.includes(item.id)
  );

  const modifiedWishListData: MenuTypelInterface[] = allWishListData.map(
    (item) => ({
      ...item,
      firstType: wishListType,
    })
  );

  if (!data) {
    return (
      <View style={[styles.containerActivityIndicator, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const transformedWishListType =
    groupAndTransformDatafirstType(modifiedWishListData);
  const transformedDataFirstType = groupAndTransformDatafirstType(data);
  const transformedDataSecondType = groupAndTransformDataSecondType(data);
  const transformedDataThirdType = groupAndTransformDataThirdType(data);

  const combinedData: TransformInterface[] = [
    ...transformedWishListType,
    ...transformedDataFirstType,
    ...transformedDataSecondType,
    ...transformedDataThirdType,
  ];

  const renderItem = ({ item }: { item: TransformInterface }) => (
    <>
      {item.type === wishListType ? (
        <Link
          href={`/menu/modal`}
          asChild
        >
          <Pressable style={styles.city}>
            <View style={styles.city}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.name}>WISH LIST</Text>
              <Text style={styles.type}>Your choise</Text>
            </View>
          </Pressable>
        </Link>
      ) : (
        <Link
          href={`/${isProduction ? item.type + ".html" : item.type}`}
          asChild
        >
          <Pressable style={styles.city}>
            <View style={styles.city}>
              <Image style={styles.image} source={{ uri: item.image }} />
              <Text style={styles.name}>{item.type}</Text>
              <Text style={styles.type}>Collections</Text>
            </View>
          </Pressable>
        </Link>
      )}
    </>
  );

  return (
    <>
      <FlatList
        data={combinedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.type}
        numColumns={2}
      />
      <Text style={styles.type}>
       1/ In this page you can see general popular groups of responses and
        personal collections on the basis of intereses this user, his search or
        engagement in page browsing
      </Text>
      <Text style={styles.type}>...</Text>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#F5F5F5",
  },
  city: {
    flex: 1,
    aspectRatio: 1,
    marginHorizontal: 8,
    marginBottom: 16,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    elevation: 2,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "70%",
  },
  name: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  containerActivityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  type: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "300",
    marginTop: 4,
  },
});

export default CollectionsFeedPageTemplate;
