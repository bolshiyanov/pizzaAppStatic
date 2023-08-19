import { Link } from "expo-router";
import React, { useEffect } from "react";
import isProduction from "@/src/utils/isProdaction";
import { useAppDispatch, useAppSelector } from "@/src/utils/hooks/redux";

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

import groupAndTransformData from "../utils/transformData"; // Import the utility function

interface ProductsFeedPagelInterface {
  data: MenuTypelInterface[];
}

const CollectionsFeedPageTemplate: React.FC<ProductsFeedPagelInterface> = ({
  data,
}) => {
  

  if (!data)
    return (
      <View style={[styles.containerActivityIndicator, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );

  const transformedData = groupAndTransformData(data); // Use the utility function here

  const renderItem = ({ item }: { item: TransformInterface }) => (
    <Link
      href={`/${isProduction ? item.type + ".html" : item.type}`}
      asChild
    >
      <Pressable style={styles.city}>
        <View style={styles.city}>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.name}>{item.type}</Text>
        </View>
      </Pressable>
    </Link>
  );

  return (
    <FlatList
      data={transformedData} // Use the transformData utility here
      renderItem={renderItem}
      keyExtractor={(item) => item.type}
      numColumns={2}
    />
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
});

export default CollectionsFeedPageTemplate;