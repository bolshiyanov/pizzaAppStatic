import { Link, Stack  } from "expo-router";
import { Pressable, View } from "react-native";
import ArrowLeft from '@/assets/images/svg/icons/arrow-left-solid.svg'
export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true,
        title: "ITEMS-1-1",
        headerTitleStyle: {
          fontWeight: "400",
        },
        headerLeft: () => (
          <Link href="../" asChild>
            <Pressable>
              {({ pressed }) => (
                <View >
                  <ArrowLeft width={28} height={28} />
                </View>
              )}
            </Pressable>
          </Link>
        ),
        
      }}
    >
      <Stack.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          headerShown: false,
          headerTitleStyle: {
            fontWeight: "300",
          },
          
          
          }}
      />
    </Stack>
  );
}
