import { View, Text, Dimensions } from "react-native";
import BackBtn from "./backBtn";
const deviceWidth = Dimensions.get("screen").width;

export default () => {
  return (
    <View
      style={{
        backgroundColor: "#4796BD",
        flexDirection: "row",
        alignItems: "center",
        width: deviceWidth,
      }}
    >
      <BackBtn />
      <Text
        style={{
          fontSize: 26,
          color: "#fff",
          marginVertical: 15,
        }}
      >
        Register
      </Text>
    </View>
  );
};
