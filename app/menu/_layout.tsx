import { Link, Stack  } from "expo-router";
import { Pressable, StyleSheet, View } from "react-native";
import ArrowLeft from '@/assets/images/svg/icons/arrow-left-solid.svg'

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "modal",
          title: "Wish list",
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
        }}
      /> 
    </Stack>
  );
}
