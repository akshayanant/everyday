import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

const Card = props => {
  return (
    <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 30,
    padding: 20,
    alignItems: "center",
    shadowRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    backgroundColor: "white",
    elevation: 5
  }
});

export default Card;
