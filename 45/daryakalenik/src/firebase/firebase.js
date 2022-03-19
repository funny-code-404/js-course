import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYSVajaASWRRQNij18miYDmo_crRqAK5c",
  authDomain: "hw-45-14672.firebaseapp.com",
  projectId: "hw-45-14672",
  storageBucket: "hw-45-14672.appspot.com",
  messagingSenderId: "992531278980",
  appId: "1:992531278980:web:abb3a2ac2a4b45d8abe6d1",
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.database;
export default firebase;
