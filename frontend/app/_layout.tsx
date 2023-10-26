import { Slot } from "expo-router";
import { View, ScrollView, StyleSheet } from "react-native";

export default function HomeLayout() {
  return (
    <>
      <View style={styles.container}>
        <ScrollView>
          <Slot />
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3F9FB",
    flex: 1,
    borderWidth: 1,
  },
});
