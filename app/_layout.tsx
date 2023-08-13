import React from "react";

import { Provider } from "react-redux";
import { setupStore } from "@/store/store";

import { Drawer } from "@/src/utils/navigations/Drawer";
import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import WishListIcon from "@/assets/images/svg/icons/heart-solid.svg";

import Counter from "@/src/components/common/counter";

export const unstable_settings = {
  initialRouteName: "index",
};

const store = setupStore();

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Drawer >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Static React App",
          }}
        />
        <Drawer.Screen
          name="menu" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Menu",
            title: "Menu",
            headerRight: () => (
              <Link href="/menu/modal" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <View style={styles.container}>
                      <WishListIcon width={28} height={28} />
                      <View style={styles.counterBox}><Counter /></View>
                    </View>
                  )}
                </Pressable>
              </Link>
            ),
          }}
        />

        <Drawer.Screen
          name="contacts" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Contact",
            title: "contact",
          }}
        />
      </Drawer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    height: 38,
    width: 60,
  },
  counterBox: {
    flex: 1,
    position: 'absolute',
    start: 0,
    right: 5
  },
});
