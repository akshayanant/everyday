import React, { Component, useState } from "react";
import {
  View,
  StyleSheet,
  Button,
  Modal,
  Text,
  DatePickerAndroid
} from "react-native";
import TextInputCustom from "./../utilities/components/TextInput";
import { primary, accent } from "./../utilities/colors";
import Card from "./../utilities/components/Card";
import { pickDate } from "./../utilities/datePicker";

const AddExpense = props => {
  const date = new Date();
  let today =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  const [expenseDetail, setExpenseDetail] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedDate, setDate] = useState(today);
  const visible = props.visible;

  const handleChangeExpenseDetail = event => {
    setExpenseDetail(event);
  };

  const handleChangeAmount = event => {
    setAmount(event);
  };

  const handleDateSelecter = () => {
    pickDate(setDate);
  };

  const handleSubmit = () => {
    setDate(today);
    props.handleExpenseAdded();
  };

  if (!visible) {
    return <View></View>;
  }
  return (
    <Modal>
      <View style={styles.container}>
        <Text style={styles.text}>Add Expense</Text>
        <Card>
          <Button
            title={selectedDate}
            onPress={handleDateSelecter}
            color={primary}
          />
          <TextInputCustom
            placeholder="Details"
            styling={styles.expenseDetail}
            value={expenseDetail}
            onChange={handleChangeExpenseDetail}
          />

          <TextInputCustom
            placeholder="Amount"
            value={amount}
            onChange={handleChangeAmount}
            styling={styles.expenseAmount}
            keyboardType="number-pad"
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
  selection: {
    marginVertical: 30,
    padding: 20,
    alignItems: "center",
    width: "80%",
    shadowRadius: 6,
    shadowColor: "black",
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 0,
      height: 2
    },
    backgroundColor: "white",
    elevation: 5
  },
  expenseDetail: {
    textAlign: "center",
    width: 150
  },

  expenseAmount: {
    width: 150,
    textAlign: "center"
  },

  text: {
    fontSize: 30
  }
});

export default AddExpense;
