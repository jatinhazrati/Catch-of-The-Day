import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANp-2uVG0bliGA3NlFfg7E-pLwA0yUiXY",
  authDomain: "catch-of-the-day-jatin-h-b9451.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-jatin-h-b9451.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
