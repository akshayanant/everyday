import { DatePickerAndroid } from "react-native";

export const pickDate = async setDate => {
  const d = new Date();
  let today = d.getMonth() + "/" + d.getDate() + "/" + d.getFullYear();
  try {
    const { action, year, month, day } = await DatePickerAndroid.open({
      // Use `new Date()` for current date.
      // May 25 2020. Month 0 is January.
      date: new Date()
    });
    if (action !== DatePickerAndroid.dismissedAction) {
      // Selected year, month (0-11), day
      today = month + 1 + "/" + day + "/" + year;
      setDate(today);
    }
  } catch ({ code, message }) {
    console.warn("Cannot open date picker", message);
  }
};
