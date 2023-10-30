import { StyleSheet, Text } from "react-native";

export default ({ errorText }: any) => {
  return <Text style={styles.errorText}>{`${errorText}`}</Text>;
};

const styles = StyleSheet.create({
  errorText: {
    borderWidth: 1,
    borderColor: "red",
    color: "red",
    marginTop: 20,
    alignSelf: "center",
    paddingHorizontal: 40,
    paddingVertical: 10,
    borderRadius: 10,
  },
});
