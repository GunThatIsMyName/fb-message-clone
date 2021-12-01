import firebase from "firebase";

const firebaseApp =firebase.initializeApp({
  apiKey: "AIzaSyAdEjxjBSCnfMKs6FF9vGJtnIx-z-qM2Yc",
  authDomain: "facebook-messenger-clone-8c670.firebaseapp.com",
  projectId: "facebook-messenger-clone-8c670",
  storageBucket: "facebook-messenger-clone-8c670.appspot.com",
  messagingSenderId: "974274883979",
  appId: "1:974274883979:web:64029fe117c9039b7c7f8e",
  measurementId: "G-50G340B7CR"
});

// Initialize Firebase

const db = firebaseApp.firestore();

export default db;