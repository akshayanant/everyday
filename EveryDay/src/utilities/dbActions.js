import * as firebase from "firebase";
import "firebase/firestore";

export const saveToDb = (key, value) => {
  let db = firebase.firestore();
  db.collection(key)
    .add({
      value
    })
    .then(docRef => {
      console.log(docRef.id);
    })
    .catch(err => {
      console.log("Error saving to DB ", err);
    });
};

export const getFromDB = (key, setState) => {
  db.collection(key)
    .get()
    .then(snapshot => {
      let res = [];
      snapshot
        .map(doc => {
          res.push(doc.data());
        })
        .catch(err => {
          console.log("Error Retrieving Data", err);
        });
      setState(res);
    });
};
