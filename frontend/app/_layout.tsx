import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View, ScrollView, StyleSheet } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <View style={styles.container}>
        <StatusBar hidden={true}></StatusBar>
        <Slot />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9FB",
    flex: 1,
  },
});
