import React from "react";
import color from "color";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useTheme, Portal, FAB } from "react-native-paper";
import { useSafeArea } from "react-native-safe-area-context";
import { useIsFocused, RouteProp } from "@react-navigation/native";

import overlay from "../context/overlay";
import { Feed } from "../components/Feed";
import Notification from "../components/Notification";
import { Detail } from "../components/Detail";

const Tab = createMaterialBottomTabNavigator();

export const BottomTabs = () => {
  const theme = useTheme();
  const safeArea = useSafeArea();
  const isFocused = useIsFocused();

  let icon = "feather";

  switch ("feed") {
    case "Messages":
      icon = "email-plus-outline";
      break;
    default:
      icon = "feather";
      break;
  }

  const tabBarColor = theme.dark
    ? overlay(6, theme.colors.surface)
    : theme.colors.surface;

  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Feed"
        backBehavior="initialRoute"
        shifting={true}
        activeColor={theme.colors.primary}
        inactiveColor={color(theme.colors.text).alpha(0.6).rgb().string()}
        sceneAnimationEnabled={false}
      >
        <Tab.Screen
          name="Feed"
          component={Feed}
          options={{
            tabBarIcon: "home-account",
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Notifications"
          component={Notification}
          options={{
            tabBarIcon: "bell-outline",
            tabBarColor,
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Detail}
          options={{
            tabBarIcon: "message-text-outline",
            tabBarColor,
          }}
        />
      </Tab.Navigator>
      <Portal>
        <FAB
          visible={isFocused}
          icon={icon}
          style={{
            position: "absolute",
            bottom: safeArea.bottom + 65,
            right: 16,
          }}
          color="white"
          theme={{
            colors: {
              accent: theme.colors.primary,
            },
          }}
          onPress={() => {}}
        />
      </Portal>
    </React.Fragment>
  );
};
