import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBmvMrYLhvo01MFA_A0kgdMy1MnDfW9qzo",
  authDomain: "hw-46-98417.firebaseapp.com",
  projectId: "hw-46-98417",
  storageBucket: "hw-46-98417.appspot.com",
  messagingSenderId: "862196177604",
  appId: "1:862196177604:web:77b184dbc44fa72ec08791",
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database;
export const auth = firebase.auth();
export default firebase;
