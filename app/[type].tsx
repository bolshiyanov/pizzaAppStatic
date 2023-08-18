import React from "react";
import {useAppSelector } from "@/src/utils/hooks/redux";
import { StyleSheet } from 'react-native';
import { Text, View } from 'react-native';

const ProductPage = () => {
  const data = useAppSelector((state) => state.collectionSlice);

  return (
    <View style={styles.container}>
      <View>
        {data.map((item, index) => (
          <Text key={index}>{JSON.stringify(item)}</Text>
        ))}
      </View>
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
});

export default ProductPage;

// Static exports settings


