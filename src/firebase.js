import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyBNG4GgF_1M79xRULwzs3XiLPoHQnyPKzA",
  authDomain: "discord-85fb7.firebaseapp.com",
  databaseURL: "https://discord-85fb7.firebaseio.com",
  projectId: "discord-85fb7",
  storageBucket: "discord-85fb7.appspot.com",
  messagingSenderId: "139459705916",
  appId: "1:139459705916:web:e522a4a49d0cfb148ad739",
  measurementId: "G-6XDQC91YHE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider};
export default db;