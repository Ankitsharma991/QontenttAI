import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import CartIcon from "../../assets/cart.png";
import SearchIcon from "../../assets/search.png";
import IMG from "../../assets/img.png";

const Dashboard = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [pressedItem, setPressedItem] = useState(null);

  const handlePressIn = (item) => {
    setIsPressed(true);
    setPressedItem(item);
  };

  const handlePressOut = () => {
    setIsPressed(false);
    setPressedItem(null);
  };

  const dummyHeader = ["All", "🍔 Breakfast", "🍹 Drink", "🍕 Snack"];

  return (
    <View style={styles.mainContainer}>
      {/* User and Cart bar */}
      <View style={styles.headerContainer}>
        <View>
          <Text style={styles.hloText}>Hello</Text>
          <Text style={styles.userText}>Anastasya 👋</Text>
        </View>
        <View style={styles.imgContainer}>
          <Image source={CartIcon} />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Image source={SearchIcon} />
        <TextInput placeholder="Find your whereabouts" />
      </View>

      {/* Header Bar */}
      <View>
        <FlatList
          data={dummyHeader}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.item,
                isPressed &&
                  item === pressedItem && {
                    backgroundColor: "orange",
                  },
              ]}
              onPressIn={() => handlePressIn(item)}
            >
              <Text
                style={[
                  styles.text,
                  isPressed && item === pressedItem && { color: "white" },
                ]}
              >
                {item}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.items}
        />
      </View>

      <View style={styles.imgContainer2}>
        <Image source={IMG} style={styles.img2} />
      </View>

      {/* Food Options */}
      <View style={styles.foodOpt}>
        <Text style={styles.foodText}>Seafood 🦐</Text>
        <Text style={styles.allFoodText}>See all</Text>
      </View>
    </View>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  mainContainer: {
    paddingTop: 10,
    paddingLeft: 25,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: "rgba(255,255,255,1)",
    height: "97%",
    borderRadius: 15,
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 25,
  },
  imgContainer: {
    backgroundColor: "rgba(124, 255, 233,0.25)",
    borderRadius: 15,
    display: "flex",
    flexDirection: "column",
    height: 45,
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  hloText: {
    fontSize: 25,
    fontWeight: "700",
    color: "rgba(0,0,0,0.8)",
  },
  userText: {
    fontSize: 20,
    color: "rgba(0,0,0,0.7)",
    fontWeight: "400",
  },
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    marginTop: 20,
    alignItems: "center",
    paddingLeft: 20,
    gap: 5,
    backgroundColor: "rgba(199, 199, 199, 0.1)",
    height: 45,
    borderRadius: 15,
    marginBottom: 25,
    marginRight: 25,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  items: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  item: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginRight: 10,
    borderRadius: 25,
    backgroundColor: "rgba(246, 153, 153, 0.2)",
  },
  text: {
    fontSize: 16,
    color: "orange",
    fontWeight: "600",
  },
  imgContainer2: {
    width: "90%",
    marginTop: 20,
    display: "flex",
  },
  img2: {
    height: 150,
    width: 300,
    borderRadius: 20,
  },
  foodOpt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    marginTop: 20,
  },
  foodText: {
    fontSize: 16,
    fontWeight: "800",
    color: "rgba(0,0,0,0.7)",
  },
  allFoodText: {
    color: "#808080",
    fontWeight: "400",
  },
});
