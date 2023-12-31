import React, { useState } from "react";
import {
  ActivityIndicator,
  View,
  StyleSheet,
  Image,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useAppSelector } from "@/src/utils/hooks/redux";
import AddToWishListInSearch from "@/src/components/AddToWishListInSearch";
import Rotate from "@/assets/images/svg/icons/rotate-solid.svg";
import { tintColorLight } from "@/constants/Colors";
import { MenuTypelInterface } from "@/types/menuType";

interface dataItemInterface {
  id: string;
  name: string;
  path: string;
  firstType: string;
  image: string;
}

const SearchPage = () => {
  const [search, setSearch] = useState("");
  const [reload, setReload] = useState(0);

  const allData = useAppSelector((state) => state.allDataSlice);
  const filteredData = filterData(allData, search);

  if (!allData)
    return (
      <View style={[styles.containerActivityIndicator, styles.horizontal]}>
        <ActivityIndicator size="large" />
      </View>
    );

  const renderItem = ({ item }: { item: MenuTypelInterface }) => (
    <View style={styles.cardContainer} key={item.id}>
      <Image style={styles.image} source={{ uri: item.image }} />

      <View>
        <Text style={styles.title}>{item.name}</Text>
        <Text style={styles.subTitle}>{item.firstType.slice(0, 50)}</Text>
      </View>

      <AddToWishListInSearch id={item.id} />
    </View>
  );

  return (
    <View>
      <View style={styles.searchInputBox}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={search}
          onChangeText={setSearch}
        />
        
      </View>
      <FlatList
        data={filteredData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
        numColumns={2}
      />
      <Text style={styles.type}>In this page you can see your search</Text>
      <Text style={styles.type}>...</Text>
    </View>
  );
};

const filterData = (data: MenuTypelInterface[], searchTerm: string) => {
  return data.filter((item) => {
    return (
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.firstType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.secondType.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.thirdType.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};
const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "lightgray",
    width: "100%",
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 12,
    color: "gray",
  },
  deleteIcon: {
    position: "absolute",
    right: 10,
  },
  containerActivityIndicator: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  type: {
    textAlign: "center",
    fontSize: 10,
    fontWeight: "300",
    marginTop: 4,
  },
  searchInputBox: {
    backgroundColor: "white",
    position: "relative",
  },
  searchInput: {
    padding: 10,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 5,
  },
  searchIconBox: {
    position: "absolute",
    right: 14,
    top: 9,
  },
});

export default SearchPage;