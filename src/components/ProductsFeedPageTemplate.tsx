

import { Link } from "expo-router";
import React from "react";
import Indicator from "@/src/components/common/Indicator";
import isProduction from "@/src/utils/isProdaction";

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

interface ProductsFeedPageTemplateProps {
  data: MenuTypelInterface[];
  path: string;
}

const ProductsFeedPageTemplate: React.FC<ProductsFeedPageTemplateProps> = ({
  data,
  path,
}) => {

  if (!data)
    return (
      <View style={[styles.containerActivityIndicator, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );

  const renderItem = ({ item }: { item: MenuTypelInterface }) => (
    <Link
      href={`/${path}${isProduction ? item.name + ".html" : item.name}`}
      asChild
    >
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.type}>Type: {item.firstType}</Text>
        <Indicator id={item.id} />
      </Pressable>
    </Link>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.name}
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
  }, type: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "300",
    marginTop: 4,
  }
});

export default ProductsFeedPageTemplate;
