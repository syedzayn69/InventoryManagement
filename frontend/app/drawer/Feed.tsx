import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View, Text } from "react-native";
import BuyTab from "./InventoryTabs/buy";
import SellTab from './InventoryTabs/sell'

const Tab = createMaterialTopTabNavigator();
const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello World</Text>
    </View>
  );
};

export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: "#4796BD" },
        tabBarLabelStyle: { color: "#fff" },
        tabBarIndicatorStyle: { backgroundColor: "#fff" },
      }}
    >
      <Tab.Screen name="Buy" component={BuyTab} />
      <Tab.Screen name="Sell" component={SellTab} />
      <Tab.Screen name="History" component={HomeScreen} />
    </Tab.Navigator>
  );
}
