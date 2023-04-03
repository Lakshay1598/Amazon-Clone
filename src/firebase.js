// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBPO2HW_cf6H2ePxNjo9rTAA02HrK47H_U",
    authDomain: "clone-c61ac.firebaseapp.com",
    projectId: "clone-c61ac",
    storageBucket: "clone-c61ac.appspot.com",
    messagingSenderId: "142130161786",
    appId: "1:142130161786:web:e9cf54f984b9d4001133c3",
    measurementId: "G-YJG7G4PGHE"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export {db , auth} ;
