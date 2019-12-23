import React, { Component, useState } from "react";
import { View, StyleSheet, Button, Modal, Text } from "react-native";
import TextInputCustom from "./../utilities/components/TextInput";
import { primary, accent } from "./../utilities/colors";
import Card from "./../utilities/components/Card";
import { pickDate } from "./../utilities/datePicker";

const AddNotes = props => {
  const date = new Date();
  let today =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  const [notes, setNotes] = useState("");
  const visible = props.visible;
  const [selectedDate, setDate] = useState(today);

  const handleChangeNotes = event => {
    setNotes(event);
  };

  const handleDateSelecter = () => {
    pickDate(setDate);
  };

  const handleSubmit = () => {
    setDate(today);
    props.handleNotesAdded();
  };

  if (!visible) {
    return <View></View>;
  }
  return (
    <Modal>
      <View style={styles.container}>
        <Text style={styles.text}>Add Notes</Text>
        <Card style={styles.notes}>
          <Button
            title={selectedDate}
            onPress={handleDateSelecter}
            color={primary}
          />

          <TextInputCustom
            placeholder="Notes"
            styling={styles.notes}
            value={notes}
            onChange={handleChangeNotes}
            multiline={true}
          />
          <Button title="Submit" onPress={handleSubmit} color={accent} />
        </Card>
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
    width: 300,
    height: "70%"
  },

  text: {
    fontSize: 30
  }
});

export default AddNotes;
