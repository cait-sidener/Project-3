import firebase from 'firebase';
import firebaseAdmin from 'firebase-admin'
import serviceAccount from './service-account-key.json'

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCgTX9xZGFFxDZ1Nqcj8F0MXv_Y_bqvt78",
  authDomain: "profile-7ee82.firebaseapp.com",
  databaseURL: "https://profile-7ee82.firebaseio.com",
  projectId: "profile-7ee82",
  storageBucket: "profile-7ee82.appspot.com",
  messagingSenderId: "995305451040",
  appId: "1:995305451040:web:c400183ab52f5b04"
};
firebase.initializeApp(config);

firebaseAdmin.initializeApp({
  credentials: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://profile-7ee82.firebaseio.com"
});

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export const database = firebase.database();
export default firebase;