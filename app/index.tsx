import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';
import Bower from '@/src/components/logos/mug-saucer-solid.svg';
export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Bower width={40} height={40} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  logo: {
    marginTop: 20,
    marginBottom: 20,
  },
});