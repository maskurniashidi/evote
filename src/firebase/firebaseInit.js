import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD_AFwxnJiEFA5m_bpYDIM--VR3mzg2-HM",
  authDomain: "evote-559c9.firebaseapp.com",
  projectId: "evote-559c9",
  storageBucket: "evote-559c9.appspot.com",
  messagingSenderId: "120105520774",
  appId: "1:120105520774:web:d31f29a7652117f4e28b07",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
