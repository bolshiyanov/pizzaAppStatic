import React from "react";

import { useNavigation } from "@react-navigation/native";
import { DrawerActions } from "@react-navigation/routers";

import { Provider } from "react-redux";
import { setupStore } from "@/store/store";

import { Drawer } from "@/src/utils/navigations/Drawer";
import { Link } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";

import Bar from "@/assets/images/svg/icons/bars-solid.svg";
import WishListIcon from "@/assets/images/svg/icons/heart-solid.svg";
import Home from "@/assets/images/svg/icons/house-solid.svg";
import Book from "@/assets/images/svg/icons/book-open-solid.svg";
import Location from "@/assets/images/svg/icons/map-location-dot-solid.svg";
import ArrowLeft from "@/assets/images/svg/icons/arrow-left-solid.svg";

import Counter from "@/src/components/common/counter";

export const unstable_settings = {
  initialRouteName: "index",
};

const store = setupStore();

export default function RootLayout() {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };

  return (
    <Provider store={store}>
      <Drawer
        screenOptions={{
          drawerPosition: "left",
          headerLeft: () => (
            <Pressable onPress={openDrawer}>
              {({ pressed }) => (
                <Bar width={28} height={28} style={{ marginLeft: 5 }} />
              )}
            </Pressable>
          ),
        }}
      >
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Home",
            title: "Static React App",
            drawerIcon: (config) => <Home width={28} height={28} />,
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
                      <View style={styles.counterBox}>
                        <Counter />
                      </View>
                    </View>
                  )}
                </Pressable>
              </Link>
            ),
            drawerIcon: (config) => <Book width={28} height={28} />,
          }}
        />

        <Drawer.Screen
          name="contacts" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: "Contact",
            title: "contact",
            drawerIcon: (config) => <Location width={28} height={28} />,
          }}
        />

        <Drawer.Screen
          name="[type]" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: () => null,
            headerLeft: () => (
              <Link href="../" asChild>
                <Pressable>
                  {({ pressed }) => (
                    <View>
                      <ArrowLeft width={28} height={28} />
                    </View>
                  )}
                </Pressable>
              </Link>
            ),

            title: "collections",
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
    position: "absolute",
    start: 0,
    right: 5,
  },
});