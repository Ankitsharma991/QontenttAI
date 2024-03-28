import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import EmailIcon from "../../assets/email.png";
import Password from "../../assets/lock.png";
import Facebook from "../../assets/Facebook.png";
import Google from "../../assets/google.png";

const Login = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.headerText}>Log in</Text>
      <SafeAreaView style={styles.inputContainer}>
        <View style={styles.viewInput}>
          <Image source={EmailIcon} style={styles.img} />
          <TextInput placeholder="E-mail" />
        </View>
        <View style={styles.viewInput}>
          <Image source={Password} style={styles.img} />
          <TextInput placeholder="Password" />
        </View>
      </SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Dashboard");
        }}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <View style={styles.combText}>
        <Text style={styles.textOne}>I don't have account.</Text>
        <Text style={styles.textTwo}>Sign Up</Text>
      </View>
      <Text style={styles.cenText}>You can access our different dishes.</Text>
      <View style={styles.imgContainer}>
        <View style={styles.facebookCont}>
          <Image source={Facebook} />
        </View>
        <View style={styles.googleCont}>
          <Image source={Google} />
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  headerText: {
    marginLeft: 20,
    fontSize: 20,
    marginTop: 70,
    fontWeight: "600",
    marginBottom: 20,
  },
  mainContainer: {
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: "#FFFFFF",
    marginTop: 10,
    height: "97%",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "column",
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "white",
    paddingTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  viewInput: {
    borderColor: "black",
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10,
    paddingLeft: 25,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    display: "flex",
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 10,
    width: "90%",
  },
  button: {
    backgroundColor: "#f2b629",
    borderRadius: 50,
    opacity: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 10,
    marginBottom: 30,
  },
  buttonText: {
    alignContent: "center",
    fontSize: 16,
    fontWeight: "600",
  },
  img: {
    height: 15,
    width: 15,
  },
  combText: {
    display: "flex",
    flexDirection: "row",
    marginLeft: 20,
  },
  textOne: {
    color: "#808080",
    fontSize: 12,
  },
  textTwo: {
    fontWeight: "600",
    opacity: 0.9,
    fontSize: 12,
  },
  cenText: {
    textAlign: "center",
    marginTop: 90,
    marginBottom: 30,
    color: "#808080",
    fontSize: 12,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 15,
  },
  facebookCont: {
    backgroundColor: "rgba(0, 24, 161, 0.7)",
    padding: 20,
    borderRadius: 50,
  },
  googleCont: {
    backgroundColor: "rgba(195, 35, 35, 0.7)",
    padding: 20,
    borderRadius: 50,
  },
});
