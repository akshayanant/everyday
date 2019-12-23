import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { primary } from "./../utilities/colors";

const NavBar = props => {
  return (
    <View style={styles.navBar}>
      <Text style={styles.text}>EveryDay</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    height: 75,
    backgroundColor: primary,
    alignItems: "flex-start",
    justifyContent: "flex-end",
    padding: 10
  },
  text: {
    fontSize: 25,
    color: "white"
  }
});

export default NavBar;
