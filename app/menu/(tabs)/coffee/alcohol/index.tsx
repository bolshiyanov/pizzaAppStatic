import { Link, Stack } from "expo-router";
import React from "react";
import Indicator from "@/src/components/common/Indicator";
import Head from "expo-router/head";
import { sanitizeString } from "@/src/utils/sanitizeString";
import isProdaction from "@/src/utils/isProdaction";

import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
} from "react-native";

import data from "@/data/menuData";
import { MenuTypelInterface } from "@/types/menuType";


const path = "/menu/coffee/alcohol/";
const metaTitle = "Coffee with alcohol";
const metaDescription =
  "Coffee with alcohol Coffee with alcohol Coffee with alcohol Coffee with alcohol Coffee with alcohol";

const CoffeePage = () => {
  const renderItem = ({ item }: { item: MenuTypelInterface }) => (
    <Link
      href={`${path}${
        isProdaction
          ? sanitizeString(item.name) + ".html"
          : sanitizeString(item.name)
      }`}
      asChild
    >
      <Pressable style={styles.city}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <Text style={styles.name}>{item.name}</Text>
        <Indicator id={item.id} />
      </Pressable>
    </Link>
  );

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Head>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
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
});

export default CoffeePage;
