import firebase from 'firebase';

const firebaseApp=firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional

    apiKey: "AIzaSyBDeGRLvId9aTG-3JmFJ6QYYJ24Qo50N-c",
    authDomain: "facebook-messenger-clone-c858d.firebaseapp.com",
    databaseURL: "https://facebook-messenger-clone-c858d.firebaseio.com",
    projectId: "facebook-messenger-clone-c858d",
    storageBucket: "facebook-messenger-clone-c858d.appspot.com",
    messagingSenderId: "195838796265",
    appId: "1:195838796265:web:ecc4f0950dea730a982b78",
    measurementId: "G-EB72EB59K3"
 
});
const db=firebaseApp.firestore();
export default db;