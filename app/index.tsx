import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link } from "expo-router";
import CoffeCup from "@/assets/images/svg/icons/mug-saucer-solid.svg";



export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Link href='/menu/snacks/classic/' asChild>
            <Pressable>
              {({ pressed }) => (
                <View >
                  <CoffeCup width={28} height={28} />
                </View>
              )}
            </Pressable>
          </Link>

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
});
