import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  TextInput,
  Dimensions,
} from "react-native";
const deviceWidth = Dimensions.get("screen").width;

const RegisterScreen = () => {
  return (
    <View style={{ backgroundColor: "#F3F9FB",alignItems:'center' }}>
      <View
        style={{
          backgroundColor: "#4796BD",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text style={styles.mainHeading}>Register</Text>
      </View>
      <View>
        <View>
          <Text style={styles.heading}>Register</Text>
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

          <View style={styles.inputBox}>
            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              // onChangeText={value => {
              //   setUserEmail(value);
              // }}
              placeholder="Full Name"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Email-id</Text>

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              // onChangeText={value => {
              //   setUserEmail(value);
              // }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              // onChangeText={value => {
              //   setUserPassword(value);
              // }}
              // name="password"
              secureTextEntry
            />
          </View>
          <View style={styles.inputBox}>
            <Text style={styles.label}>Confirm Password</Text>

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              // onChangeText={value => {
              //   setUserEmail(value);
              // }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
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
          <View style={styles.inputBox}>
            <Text style={styles.label}>Name</Text>

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              // onChangeText={value => {
              //   setUserEmail(value);
              // }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.inputBox}>
            <Text style={styles.label}>Address</Text>

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              // onChangeText={value => {
              //   setUserEmail(value);
              // }}
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>
          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              // navigation.navigate('LoginScreen');
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
  newUser: {
    fontSize: 18,
    color: "#9ca2ad",

    marginTop: 25,
    marginBottom: 10,
  },
  loginButton: {
    width: 280,
    height: 40,
    backgroundColor: "#4796BD",
    borderRadius: 20,
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
    fontSize: 30,
    color: "#122E40",
    fontWeight: "bold",
    marginTop: 25,
  },
  
  mainHeading: {
    fontSize: 26,
    color: "#fff",
    textAlign:'center',
    marginVertical: 15,
    width: deviceWidth
  },

  inputBox: {
    backgroundColor: "#E0E0E0",
    borderRadius: 10,
    marginRight: 28,
    marginLeft: 28,
    textAlign: "left",
    marginVertical: 10,
    height: 55,
  },

  label: {
    paddingLeft: 10,
    alignItems: "center",
    justifyContent: "center",
    fontSize: 15,
    color: "#828282",
  },
  inputArea: {
    paddingLeft: 20,
  },
});
