import * as firebase from 'firebase'

import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDGKfp_6BLbJWo9CHmc0FWngGUJ4PNzlgo",
    authDomain: "signal-react-native-clone.firebaseapp.com",
    projectId: "signal-react-native-clone",
    storageBucket: "signal-react-native-clone.appspot.com",
    messagingSenderId: "345481180431",
    appId: "1:345481180431:web:a78820ad0b773c8d087a7a"
  };

  let app;

  if  (firebase.apps.length === 0) {
    app = firebase.initializeApp(firebaseConfig)
  } else {
    app = firebase.app()
  }

  const db = app.firestore();
  const auth = firebase.auth();

  export { db, auth };
