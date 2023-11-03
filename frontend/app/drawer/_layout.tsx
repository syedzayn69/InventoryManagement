import * as React from "react";
import { View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import Feed from "./Feed";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      drawerContent={(props) => {
        return (
          <View style={{ flex: 1 }}>
            <Image
              style={{ width: "90%", height: "25%", marginVertical: 10 }}
              source={require("../../assets/images/splash.jpg")}
            />
            <DrawerItemList {...props} />
          </View>
        );
      }}
      screenOptions={{
        headerStyle:{backgroundColor:'#4796BD'},
        headerTitleStyle:{color:'white'},
        headerTintColor:'white'
      }}
    >
      <Drawer.Screen name="Inventory" component={Feed} />
      <Drawer.Screen name="Transactions" component={Feed} />
      <Drawer.Screen name="Profile" component={Feed} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <MyDrawer />
    </NavigationContainer>
  );
}
