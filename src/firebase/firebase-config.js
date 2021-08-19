import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-WqGj2iKmz6J2q1lFQJQ4OMZA79foZoU",
  authDomain: "react-app-41521.firebaseapp.com",
  projectId: "react-app-41521",
  storageBucket: "react-app-41521.appspot.com",
  messagingSenderId: "412869110260",
  appId: "1:412869110260:web:6b08cf9f5200f63a7171a1",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
