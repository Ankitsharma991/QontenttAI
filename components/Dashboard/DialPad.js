import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Home from "../../assets/home.png";
import Home1 from "../../assets/home1.png";
import Bell from "../../assets/bell.png";
import Bell1 from "../../assets/bell1.png";
import User from "../../assets/user.png";
import User1 from "../../assets/user1.png";
import Chat from "../../assets/chat.png";
import Chat1 from "../../assets/chat1.png";
import Order from "../../assets/order.png";
import Order1 from "../../assets/order1.png";
import { useState } from "react";

const DialPad = () => {
  const [isPressed, setIsPressed] = useState(false);
  const [pressedItem, setPressedItem] = useState(null);

  const handlePressIn = (item) => {
    setIsPressed(true);
    setPressedItem(item);
  };
  return (
    <View style={styles.iconContainer}>
      <TouchableOpacity onPressIn={() => handlePressIn(Home)}>
        <Image source={isPressed && pressedItem === Home ? Home1 : Home} />
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => handlePressIn(Bell)}>
        <Image source={isPressed && pressedItem === Bell ? Bell1 : Bell} />
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => handlePressIn(Chat)}>
        <Image source={isPressed && pressedItem === Chat ? Chat1 : Chat} />
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => handlePressIn(Order)}>
        <Image source={isPressed && pressedItem === Order ? Order1 : Order} />
      </TouchableOpacity>
      <TouchableOpacity onPressIn={() => handlePressIn(User)}>
        <Image source={isPressed && pressedItem === User ? User1 : User} />
      </TouchableOpacity>
    </View>
  );
};

export default DialPad;

const styles = StyleSheet.create({
  iconContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 20,
    paddingBottom: 10,
    alignItems: "center",
  },
});
