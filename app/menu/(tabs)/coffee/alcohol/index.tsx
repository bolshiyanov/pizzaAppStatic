import { Link, Stack } from "expo-router";
import React from "react";
import Indicator from "@/src/components/common/Indicator";
import Head from "expo-router/head";

import {
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  Pressable,
} from "react-native";

import data from "@/data/menu/coffeeData/coffeeAlcohol";

import { CoffeeAlcoholInterface } from "@/types/coffeeType";

const CoffeePage = () => {
  const renderItem = ({ item }: { item: CoffeeAlcoholInterface }) => (
    <Link href={`/menu/coffee/alcohol/${item.name}`} asChild>
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
        <title>Coffee with alcohol</title>
        <meta name="description" content="In this section, you'll discover an array of coffee options infused with a touch of elegance. Indulge in the captivating fusion of flavors as we present a diverse collection of coffee with alcohol. From classic Irish coffee to innovative creations, our menu offers a delightful range of choices that blend the rich allure of coffee with the spirited essence of select alcohols. Elevate your coffee experience with our harmonious concoctions, perfect for those seeking a sophisticated and delightful indulgence." />
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
