import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAjk9MwESypj7StFC7m5f2A9p0uKABeLTI",
    authDomain: "firestore-auth-55075.firebaseapp.com",
    projectId: "firestore-auth-55075",
    storageBucket: "firestore-auth-55075.appspot.com",
    messagingSenderId: "649212089254",
    appId: "1:649212089254:web:341b45be81ab49415f7567"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore()
const auth = firebase.auth()
const marcaTiempo = firebase.firestore.FieldValue.serverTimestamp

firebase.getCurrentUser = () => {
    return new Promise((resolve, reject) => {
        const unsuscribe = firebase.auth().onAuthStateChanged(user => {
            unsuscribe()
            resolve(user)
        }, reject)
    })
}

export { db, auth, marcaTiempo, firebase }