import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var config = {
  apiKey: "AIzaSyCVcwkI-pzrA8GMAvEG1uM_dIdvZmrqorM",
  authDomain: "teams-27260.firebaseapp.com",
  projectId: "teams-27260",
  storageBucket: "teams-27260.appspot.com",
  messagingSenderId: "564861838397",
  appId: "1:564861838397:web:7fbcf08d296222fe357654",
};

const firebaseApp = !firebase.apps.length
  ? firebase.initializeApp(config)
  : firebase.app();

export const db = firebaseApp.firestore();

export default firebaseApp;
