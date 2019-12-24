import React, { Component, useState } from "react";
import { StyleSheet, View, Button, Modal } from "react-native";
import NavBar from "./navBar";
import AddExpense from "./AddExpense";
import AddNotes from "./addNotes";
import { accent } from "./../utilities/colors";
import { saveToDb } from "./../utilities/dbActions";

const MainScreen = props => {
  const [visibleExpense, setVisibleExpense] = useState(false);
  const [visibleNotes, setVisibleNotes] = useState(false);

  const handleAddExpense = () => {
    setVisibleExpense(true);
  };

  const handleExpenseAdded = (date, name, amount) => {
    setVisibleExpense(false);
    const expense = {
      date: date,
      amount: parseInt(amount),
      name: name
    };
    saveToDb("expense", expense);
  };

  const handleAddNotes = () => {
    setVisibleNotes(true);
  };

  const handleNotesAdded = notes => {
    setVisibleNotes(false);
  };

  return (
    <View>
      <NavBar />
      <View style={styles.container}>
        <View>
          <Button
            title="Add Expense"
            onPress={handleAddExpense}
            color={accent}
          />
          <AddExpense
            visible={visibleExpense}
            handleExpenseAdded={handleExpenseAdded}
          />
        </View>
        <View>
          <Button title="Add Notes" onPress={handleAddNotes} color={accent} />
          <AddNotes
            visible={visibleNotes}
            handleNotesAdded={handleNotesAdded}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100
  },
  container: {
    height: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    padding: 20
  }
});

export default MainScreen;
