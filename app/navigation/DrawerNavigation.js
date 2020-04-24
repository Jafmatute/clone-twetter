import React from "react";
import { Text, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AccountProfile } from "../components/account/AccountProfile";

const Drawer = createDrawerNavigator();

function DrawerContent() {
  return <AccountProfile />;
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

export const RootNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={() => <DrawerContent />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};
