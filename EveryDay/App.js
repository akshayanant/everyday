import React from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./src/components/mainScreen";

export default function App() {
  return (
    <View>
      <MainScreen style={styles.screen} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
