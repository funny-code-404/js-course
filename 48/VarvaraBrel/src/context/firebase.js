import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
  apiKey: 'AIzaSyDd6YE2_62OkoeVXccI3fJQEEpepaQ-3EM',
  authDomain: 'test-84847.firebaseapp.com',
  projectId: 'test-84847',
  storageBucket: 'test-84847.appspot.com',
  messagingSenderId: '454090812838',
  appId: '1:454090812838:web:9e7f4a1568fff07fb4b367',
};

firebase.initializeApp(firebaseConfig);

export const database = firebase.database;
