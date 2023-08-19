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

  const firstDataThisPage: MenuTypelInterface[] = [];
  const secondDataThisPage: MenuTypelInterface[] = [];
  const thirdDataThisPage: MenuTypelInterface[] = [];

  if (!allData)
    return (
      <View style={[styles.containerActivityIndicator, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );

  allData.forEach((item) => {
    if (type.includes(item.firstType)) {
      firstDataThisPage.push(item);
    }
  });
  allData.forEach((item) => {
    if (type.includes(item.secondType)) {
      secondDataThisPage.push(item);
    }
  });
  allData.forEach((item) => {
    if (type.includes(item.thirdType)) {
      thirdDataThisPage.push(item);
    }
  });
  const combinedData = [
    ...firstDataThisPage,
    ...secondDataThisPage,
    ...thirdDataThisPage,
  ];

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
        <Text style={styles.type}>
          Types: {item.secondType} ,{item.firstType}, {item.thirdType}
        </Text>
      </Pressable>
    </Link>
  );

  return (
    <>
      <FlatList
        data={combinedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
      <Text style={styles.type}>
        In this page you can see general popular groups of responses and
        personal collections on the basis of intereses this user, his search or
        engagement in page browsing
      </Text>
      <Text style={styles.type}>...</Text>
    </>
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
