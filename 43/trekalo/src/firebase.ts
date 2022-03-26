import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD0v6FawEdQ2WXzFCzrnjZSNbwxHo7Dplg",
  authDomain: "diplom-bcdd1.firebaseapp.com",
  databaseURL: "https://diplom-bcdd1-default-rtdb.firebaseio.com",
  projectId: "diplom-bcdd1",
  storageBucket: "diplom-bcdd1.appspot.com",
  messagingSenderId: "1081687298211",
  appId: "1:1081687298211:web:5948362b2a7ecae82c2f16",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export default firebase;
