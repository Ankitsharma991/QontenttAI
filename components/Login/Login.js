import { View, Text, SafeAreaView, TextInput, StyleSheet } from "react-native";

const Login = ({ navigation }) => {
  return (
    <View>
      <Text>Log in</Text>
      <SafeAreaView>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </SafeAreaView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    paddingLeft: 30,
  },
});
