import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import data from "@/data/menuData";
import { currencySymbol } from "@/data/settings/currency";

import { ScrollView } from "react-native-gesture-handler";

import Button from "@/src/components/AddToWishList";
import isProduction from "@/src/utils/isProdaction";

const CoffeeDetails = () => {
  const { name } = useLocalSearchParams();

  let updatedName = name;

  if (isProduction && typeof updatedName === "string") {
    updatedName = updatedName.replace(".html", "");
  }

  const selectedName = Array.isArray(updatedName) ? updatedName[0] : updatedName;

  const item = data.find((c) => c.name.toString() === selectedName);

  return (
    <ScrollView style={styles.container}>
      {item && (
        <>
          <Image style={styles.image} source={{ uri: item.image }} />
          <Text style={styles.name}>{item.name}</Text>
          <View style={styles.detailsContainer}>
            <Button id={item.id} />

            {item.descriptions && (
              <>
                <Text style={styles.detailsTitle}>Details:</Text>
                <Text style={styles.detailsText}>{item.descriptions}</Text>
              </>
            )}
            <Text style={styles.detailsTitle}>
              Price:{" "}
              <Text style={styles.detailsPrice}>
                &nbsp;1.2&nbsp;{currencySymbol}&nbsp;
              </Text>
            </Text>
          </View>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  image: {
    width: "100%",
    aspectRatio: 16 / 9,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 16,
    marginTop: 16,
  },
  detailsContainer: {
    marginHorizontal: 16,
    marginVertical: 16,
  },
  detailsTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  detailsPrice: {
    fontSize: 18,
    backgroundColor: "#2f95dc",
    color: "#ffffff",
    borderRadius: 10,
    marginBottom: 8,
  },
  detailsText: {
    fontSize: 16,
    lineHeight: 24,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 4,
    padding: 8,
    borderRadius: 8,
    backgroundColor: "transparent",
    opacity: 0.8,
  },
});

export default CoffeeDetails;

// Static exports settings

export async function generateStaticParams(): Promise<
  Record<string, string>[]
> {
  return Promise.resolve(data.map((item) => ({ name: item.name })));
}
