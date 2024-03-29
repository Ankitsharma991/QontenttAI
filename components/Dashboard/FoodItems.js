import { View, FlatList, StyleSheet, Text, Image } from "react-native";
import LegPiece from "../../assets/leg.png";
import Sushi from "../../assets/sus.png";
import Plus from "../../assets/plus.png";

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
    
  ];
  return (
    <View style={{ marginTop: 15 }}>
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
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.FoodItems}
      />
    </View>
  );
};

export default FoodItems;

const styles = StyleSheet.create({
  foodImage: {
    height: 80,
    width: 80,
    alignContent: "center",
    alignSelf: "center",
  },
  foodContainer: {
    display: "flex",
    flexDirection: "column",
    padding: 10,
    backgroundColor: "rgba(247,214,208,0.2)",
  },
  FoodItems: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginRight: 10,
  },
  addOrder: {
    backgroundColor: "#30E3B1",
    padding: 6,
    borderRadius: 5,
    height: 22,
    width: 22,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  orderContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  foodName: {
    textAlign: "left",
    // maxWidth: 150,
    // fontSize:
  },
  foodPrice: {
    fontSize: 20,
    fontWeight: "800",
  },
});
