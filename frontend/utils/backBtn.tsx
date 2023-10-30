import { router } from "expo-router";
import { Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default () => {
  return (
    <TouchableOpacity
      style={styles.Btn}
      onPress={() => {
        router.back();
      }}
    >
      <Text>{"<-"}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    marginHorizontal: 15,
  },
});
