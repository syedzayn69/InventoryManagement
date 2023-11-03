import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  Dimensions,
} from "react-native";
const deviceWidth = Dimensions.get("screen").width;

const LoginScreen = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");

  return (
    <>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#4796BD",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Text style={styles.heading}>Login</Text>
        </View>
        <View>
          <View>
            <Image
              style={{
                width: 274,
                height: 207,
                marginVertical: 40,
                marginRight: 10,
              }}
              source={require("../assets/images/Illustration.png")}
            />

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              onChangeText={(value) => {
                setUserEmail(value);
              }}
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              onChangeText={(value) => {
                setUserPassword(value);
              }}
              placeholder="Password"
              autoCapitalize="none"
              secureTextEntry
            />
            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => router.push("/drawer/Feed")}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>

            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Text style={styles.newUser}>New user ? </Text>
              <TouchableOpacity
                onPress={() => {
                  router.push("/Register");
                }}
              >
                <Text
                  style={{
                    fontSize: 18,
                    textDecorationLine: "underline",
                    color: "#9ca2ad",
                    marginTop: 25,
                    marginBottom: 10,
                  }}
                >
                  Register{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  newUser: {
    fontSize: 18,
    color: "#9ca2ad",
    marginTop: 25,
    marginBottom: 10,
  },
  loginButton: {
    width: 280,
    height: 50,
    backgroundColor: "#4796BD",
    borderRadius: 10,
    justifyContent: "center",
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    alignContent: "flex-start",
    textAlign: "center",
  },
  heading: {
    fontSize: 26,
    color: "#fff",
    textAlign: "center",
    marginVertical: 15,
    width: deviceWidth,
  },
  inputArea: {
    backgroundColor: "#E0E0E0",
    fontSize: 16,
    borderRadius: 10,
    textAlign: "left",
    marginVertical: 10,
    height: 55,
    paddingLeft: 20,
  },
});
