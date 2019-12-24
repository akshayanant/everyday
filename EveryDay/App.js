import React from "react";
import { StyleSheet, View } from "react-native";
import MainScreen from "./src/components/mainScreen";
import apiKeys from "./src/utilities/apiKeys";
import * as firebase from "firebase";

export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(apiKeys.fireBaseConfig);
  }
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
