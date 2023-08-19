import React from "react";
import { Link } from "expo-router";
import { useAppSelector } from "@/src/utils/hooks/redux";
import isProduction from "@/src/utils/isProdaction";
import {
  StyleSheet,
  FlatList,
  Pressable,
  ActivityIndicator,
  Text,
  Image,
  View,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { MenuTypelInterface } from "@/types/menuType";
import websiteAddress from "@/config";

const ProductPage = () => {
  const allData = useAppSelector((state) => state.allDataSlice);
  const { type } = useLocalSearchParams();

  const dataThisPage: MenuTypelInterface[] = [];

  allData.forEach((item) => {
    if (type.includes(item.firstType)) {
      dataThisPage.push(item);
    }
  });
  if (!allData)
    return (
      <View style={[styles.containerActivityIndicator, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );

  const renderItem = ({ item }: { item: MenuTypelInterface }) => (
    <Link
      href={`${websiteAddress}/${item.path}/${
        isProduction ? item.name + ".html" : item.name
      }`}
      asChild
    >
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>Type: {item.firstType}</Text>
      </Pressable>
    </Link>
  );

  return (
    <FlatList
      data={dataThisPage}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
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
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
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
  name: {
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 8,
  },
  type: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "300",
    marginTop: 4,
  },
});

export default ProductPage;

// Static exports settings
