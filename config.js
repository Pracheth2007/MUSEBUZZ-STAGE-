import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
  apiKey: "AIzaSyDGL2d2MwQY0TOUh9sI4IKB56v5-4qe0Kg",
  authDomain: "musebuzz.firebaseapp.com",
  databaseURL: "https://musebuzz.firebaseio.com",
  projectId: "musebuzz",
  storageBucket: "musebuzz.appspot.com",
  messagingSenderId: "304918734936",
  appId: "1:304918734936:web:10e1d741899112810c822d",
  measurementId: "G-NSR1TNYG2X"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
