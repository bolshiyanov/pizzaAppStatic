import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Explore in bar menu</Text>
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
