import React, { Component } from "react";
import { TextInput, View, StyleSheet } from "react-native";

const TextInputCustom = props => {
  return (
    <View>
      <TextInput {...props} style={{ ...styles.input, ...props.styling }} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    marginVertical: 10,
    textAlign: "center",
    textAlignVertical: "bottom",
    fontSize: 20
  }
});

export default TextInputCustom;
