import React, { Component, useState } from "react";
import { View, StyleSheet, Button, Modal, Text } from "react-native";
import TextInputCustom from "./../utilities/components/TextInput";
import { primary, accent } from "./../utilities/colors";

const AddNotes = props => {
  const [notes, setNotes] = useState("");
  const visible = props.visible;

  const handleChangeNotes = event => {
    setNotes(event);
  };

  if (!visible) {
    return <View></View>;
  }
  return (
    <Modal>
      <View style={styles.container}>
        <Text style={styles.text}>Add Notes</Text>
        <TextInputCustom
          placeholder="Notes"
          styling={styles.notes}
          value={notes}
          onChange={handleChangeNotes}
        />
        <Button
          title="Submit"
          onPress={props.handleNotesAdded}
          color={accent}
        />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 50,
    marginVertical: 30,
    flex: 1,
    height: 200
  },
  notes: {
    width: 100
  },

  text: {
    fontSize: 30
  }
});

export default AddNotes;
