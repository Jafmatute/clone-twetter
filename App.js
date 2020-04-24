import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import Main from "./app/screens/Main";

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Main />
      </NavigationContainer>
    </PaperProvider>
  );
}
