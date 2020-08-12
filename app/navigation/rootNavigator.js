import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

//navigations
import { StackNavigator } from "./stacks/StackNavigator";
import { DrawerContent } from "../components/account/DrawerContent";

const Drawer = createDrawerNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={StackNavigator} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
