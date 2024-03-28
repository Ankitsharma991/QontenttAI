import { StyleSheet } from "react-native";
import Login from "./components/Login/Login";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./components/Dashboard/Dashboard";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const styles = StyleSheet.style({
//   container: {
//     width: "100%",
//     height: "100%",
//     backgroundColor: "white",
//   },
// });
