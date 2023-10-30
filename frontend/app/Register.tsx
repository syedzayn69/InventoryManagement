import { router } from "expo-router";
import React, { useState } from "react";
import ErrorMsg from "../utils/errorBox";
import BackBtn from "../utils/backBtn";
import HeaderBlue from "../utils/HeaderBlue";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
} from "react-native";
const deviceWidth = Dimensions.get("screen").width;

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shopName, setShopName] = useState("");
  const [shopAddress, setShopAddress] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const confirmPass = (pass: any) => {
    if (pass !== password) setErrorMsg("Passwords mismatch!");
    else setErrorMsg("");
  };
  return (
    <View style={{ alignItems: "center" }}>
      <HeaderBlue />
      <View>
        <View style={{ width: 380 }}>
          <Text style={styles.heading}>Register</Text>
          {errorMsg ? <ErrorMsg errorText={errorMsg} /> : null}
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 25,
              color: "#122E40",
              marginLeft: 28,
              marginTop: 25,
              marginBottom: 10,
            }}
          >
            Account
          </Text>
          <TextInput
            style={styles.inputArea}
            blurOnSubmit={true}
            onChangeText={(value) => {
              setFullName(value);
            }}
            placeholder="Full Name"
            keyboardType="default"
          />

          <TextInput
            style={styles.inputArea}
            blurOnSubmit={true}
            onChangeText={(value) => {
              setEmail(value);
            }}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.inputArea}
            blurOnSubmit={true}
            onChangeText={(value) => {
              setPassword(value);
            }}
            placeholder="Password"
            secureTextEntry
          />

          <TextInput
            style={styles.inputArea}
            blurOnSubmit={true}
            onChangeText={(value) => {
              confirmPass(value);
            }}
            placeholder="Confirm Password"
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry
          />
          <Text
            style={{
              alignSelf: "flex-start",
              fontSize: 25,
              color: "#122E40",
              marginLeft: 28,
              marginTop: 25,
              marginBottom: 10,
            }}
          >
            Shop Details
          </Text>

          <TextInput
            style={styles.inputArea}
            blurOnSubmit={true}
            onChangeText={(value) => {
              setShopName(value);
            }}
            placeholder="Shop Name"
            keyboardType="default"
            autoCapitalize="none"
          />

          <TextInput
            style={styles.inputArea}
            blurOnSubmit={true}
            onChangeText={(value) => {
              setShopAddress(value);
            }}
            placeholder="Address"
            keyboardType="default"
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              router.replace("/");
            }}
          >
            <Text style={styles.buttonText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  loginButton: {
    width: 280,
    height: 40,
    backgroundColor: "#4796BD",
    borderRadius: 20,
    alignSelf: "center",
    justifyContent: "center",
    marginVertical: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 20,
    alignSelf: "center",
    alignContent: "flex-start",
    textAlign: "center",
  },
  heading: {
    fontSize: 30,
    color: "#122E40",
    fontWeight: "bold",
    marginTop: 25,
    textAlign: "center",
  },
  inputArea: {
    paddingLeft: 20,
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginRight: 28,
    marginLeft: 28,
    textAlign: "left",
    marginVertical: 10,
    height: 55,
  },
});
