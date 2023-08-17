import { useLocalSearchParams } from "expo-router";
import Head from "expo-router/head";
import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import AddToWishList from "@/src/components/AddToWishList";
import isProduction from "@/src/utils/isProdaction";
import { MenuTypelInterface } from "@/types/menuType";

import { currencySymbol } from "@/data/settings/currency";

interface ProductsFeedPageTemplateProps {
  data: MenuTypelInterface[];
}

const ProductDetailsTemplate: React.FC<ProductsFeedPageTemplateProps> = ({
  data,
}) => {
  const { name } = useLocalSearchParams();

  let updatedName = name;

  if (isProduction && typeof updatedName === "string") {
    updatedName = updatedName.replace(".html", "");
  }

  const selectedName = Array.isArray(updatedName)
    ? updatedName[0]
    : updatedName;

  const item = data.find((c) => c.name.toString() === selectedName);

  return (
    <>
      {item && (
        <Head>
          <title>{item.name}</title>
          <meta name="description" content={item.descriptions} />

          <meta property="og:type" content="article" />
          <meta
            property="og:title"
            content={item.name}
          />
          <meta
            property="og:description"
            content={item.descriptions}
          />
          <meta property="og:image" content={ item.image } />
          <meta property="og:url" content="PERMALINK" />
          <meta property="og:site_name" content="REACT STATIC APP FOR SEO AND NATIVE APPS FROM EXPO-ROUTER v2" />

          <meta name="twitter:title" content={item.name} />
          <meta
            name="twitter:description"
            content={item.descriptions}
          />
          <meta name="twitter:image" content={ item.image } />
          <meta name="twitter:site" content="@BOLSHIYANOV" />
          <meta name="twitter:creator" content="@BOLSHIYANOV" />
        </Head>
      )}
      <ScrollView style={styles.container}>
        {item && (
          <>
            <Image style={styles.image} source={{ uri: item.image }} />
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.detailsContainer}>
              <AddToWishList id={item.id} />

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
    </>
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

export default ProductDetailsTemplate;
