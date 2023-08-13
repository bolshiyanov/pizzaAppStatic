import { StyleSheet, Text, View } from "react-native";
import Head from "expo-router/head";

export default function IndexScreen() {
  return (
    <>
      <Head>
        
        <title>Pizza Napoletano: 100% Italian Authenticity | Costa Adeje, Tenerife</title>
        <meta name="description" content="Located in the prestigious Costa Adeje area in Tenerife, Pizza Napoletano restaurant invites you to savor the true flavor of Neapolitan pizza, prepared over an open fire. Discover authentic Italian cuisine in the cozy atmosphere of our restaurant." />
      </Head>
      <View style={styles.container}>
        <Text style={styles.title}>Explore in bar menu</Text>
      </View>
    </>
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
