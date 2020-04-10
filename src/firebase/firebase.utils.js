import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
    apiKey: "AIzaSyCuIsUgZvRXx8O9h75hTcQrmQYNiCpGTZs",
    authDomain: "ecom-db-a15d5.firebaseapp.com",
    databaseURL: "https://ecom-db-a15d5.firebaseio.com",
    projectId: "ecom-db-a15d5",
    storageBucket: "ecom-db-a15d5.appspot.com",
    messagingSenderId: "673186083883",
    appId: "1:673186083883:web:12abd8f605f06a8e57a66e"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;