import * as firebase from "firebase";
import firestore from "firebase/firestore";

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
  apiKey: "AIzaSyDjJ_LXKdWXea4DUkbRezyBYCu6hZnxMJg",
  authDomain: "cafe-form-7540d.firebaseapp.com",
  projectId: "cafe-form-7540d",
  storageBucket: "cafe-form-7540d.appspot.com",
  messagingSenderId: "57116761783",
  appId: "1:57116761783:web:ee0e6643ca452934657732",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
