import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Provider as PaperProvider,
  DefaultTheme,
  DarkTheme,
} from "react-native-paper";
import { AppearanceProvider } from "react-native-appearance";
import Main from "./app/screens/Main";

export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <AppearanceProvider>
          <Main />
        </AppearanceProvider>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
