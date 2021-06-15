import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABu-pt-VKo8w-osnWyXwBZTZVfJ5JZPPI",
  authDomain: "burnt-orange-77f2e.firebaseapp.com",
  projectId: "burnt-orange-77f2e",
  storageBucket: "burnt-orange-77f2e.appspot.com",
  messagingSenderId: "745752994457",
  appId: "1:745752994457:web:c44fcaf54e75be97ef4e08",
  measurementId: "G-9Y76SNDRM8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
