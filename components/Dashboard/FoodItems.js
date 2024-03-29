import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import LegPiece from "../../assets/leg.png";
import Sushi from "../../assets/sus.png";
import Plus from "../../assets/plus.png";
import React from "react";

const FoodItems = () => {
  const dummyFood = [
    {
      id: 1,
      name: "Chicken leg pieces",
      price: "35",
      image: LegPiece,
    },
    {
      id: 2,
      name: "Onagi Sushi",
      price: "54",
      image: Sushi,
    },
    {
      id: 3,
      name: "Onagi Sushi",
      price: "54",
      image: Sushi,
    },
    {
      id: 4,
      name: "Onagi Sushi",
      price: "54",
      image: Sushi,
    },
  ];
  return (
    <View style={styles.container}>
      <FlatList
        data={dummyFood}
        renderItem={({ item }) => (
          <View style={styles.foodContainer}>
            <Image source={item.image} style={styles.foodImage} />
            <Text style={styles.foodName}>{item.name}</Text>
            <View style={styles.orderContainer}>
              <Text style={styles.foodPrice}>$ {item.price}</Text>
              <View style={styles.addOrder}>
                <Image source={Plus} style={{ height: 10, width: 10 }} />
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.FoodItems}
        ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
  },
  foodImage: {
    height: 80,
    width: 80,
    alignSelf: "center",
  },
  foodContainer: {
    flexDirection: "column",
    padding: 10,
    backgroundColor: "rgba(247,214,208,0.2)",
    height: 160,
    width: 150,
  },
  FoodItems: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginRight: 10,
  },
  addOrder: {
    backgroundColor: "#30E3B1",
    padding: 6,
    borderRadius: 5,
    height: 22,
    width: 22,
    alignItems: "center",
    justifyContent: "center",
  },
  orderContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodName: {
    textAlign: "left",
    marginTop: 5,
    marginBottom: 5,
    fontSize: 14,
    fontWeight: "700",
    color: "rgba(0,0,0,0.7)",
    fontFamily: "serif",
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: "800",
  },
});

export default FoodItems;
