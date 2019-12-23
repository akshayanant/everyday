import React, { Component, useState } from "react";
import { View, StyleSheet, Button, Modal, Text } from "react-native";
import TextInputCustom from "./../utilities/components/TextInput";
import { primary, accent } from "./../utilities/colors";

const AddExpense = props => {
  const [expenseDetail, setExpenseDetail] = useState("");
  const [amount, setAmount] = useState("");
  const visible = props.visible;

  const handleChangeExpenseDetail = event => {
    setExpenseDetail(event);
  };

  const handleChangeAmount = event => {
    setAmount(event);
  };

  if (!visible) {
    return <View></View>;
  }
  return (
    <Modal>
      <View style={styles.container}>
        <Text style={styles.text}>Add Expense</Text>
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
        <Button
          title="Submit"
          onPress={props.handleExpenseAdded}
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
  expenseDetail: {
    width: 100
  },

  expenseAmount: {
    width: 100
  },

  text: {
    fontSize: 30
  }
});

export default AddExpense;
