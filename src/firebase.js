import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAEs1tCPKno9s4E2K809Be9wLABzqnmWLg",
    authDomain: "hooray-6a966.firebaseapp.com",
    projectId: "hooray-6a966",
    storageBucket: "hooray-6a966.appspot.com",
    messagingSenderId: "961408110463",
    appId: "1:961408110463:web:5bd712a1113b220663544a",
    measurementId: "G-FKW9ZMX67Y"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebase.storage();

export { db, storage };