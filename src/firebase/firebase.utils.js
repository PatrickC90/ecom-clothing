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

 export const createUserProfileDocument = async (userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch (error) {
        console.log('error creating user', error.message);
      }
    }

    return userRef;
 }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;