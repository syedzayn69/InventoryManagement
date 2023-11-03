import { router } from "expo-router";
import React, { useState } from "react";
// import ErrorMsg from "../utils/errorBox";
import ImagePicker from "../../../utils/ImagePicker";

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Dimensions,
  ScrollView,
} from "react-native";
const deviceWidth = Dimensions.get("screen").width;

const RegisterScreen = () => {
  const [customerName, setCustomerName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState(0);
  const [productQuantity, setProductQuantity] = useState(0);

  const [errorMsg, setErrorMsg] = useState("");

  return (
    <ScrollView>
      <View style={{ alignItems: "center" }}>
        <View>
          <View style={{ width: 380 }}>
            <Text style={styles.heading}>Buy Items</Text>
            {/* {errorMsg ? <ErrorMsg errorText={errorMsg} /> : null} */}
            <View style={styles.headingLine}></View>
            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              onChangeText={(value) => {
                setCustomerName(value);
              }}
              placeholder="Customer Name"
              keyboardType="default"
            />

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              onChangeText={(value) => {
                setPhoneNumber(value);
              }}
              placeholder="Phone Number"
              keyboardType="numeric"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              onChangeText={(value) => {
                setAddress(value);
              }}
              placeholder="Address"
              keyboardType="default"
              autoCapitalize="none"
            />

            <View style={styles.headingLine}></View>
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 26,
                color: "#122E40",
                marginLeft: 28,
                marginBottom: 10,
              }}
            >
              Product
            </Text>

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              onChangeText={(value) => {
                setProductName(value);
              }}
              placeholder="Product Name"
              keyboardType="default"
              autoCapitalize="none"
            />

            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              onChangeText={(value) => {
                setProductPrice(parseInt(value));
              }}
              placeholder="Price"
              keyboardType="numeric"
              autoCapitalize="none"
            />
            <TextInput
              style={styles.inputArea}
              blurOnSubmit={true}
              onChangeText={(value) => {
                setProductQuantity(parseInt(value));
              }}
              placeholder="No. of Items"
              keyboardType="numeric"
              autoCapitalize="none"
            />
            <ImagePicker />

            <TouchableOpacity
              style={styles.loginButton}
              onPress={() => {
                console.log({
                  customerName,
                  phoneNumber,
                  address,
                  productName,
                  productPrice,
                  productQuantity,
                });
              }}
            >
              <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
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
  headingLine: {
    width: "90%",
    height: 1,
    backgroundColor: "black",
    alignSelf: "center",
    marginVertical: 20,
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
