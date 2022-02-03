import { initializeApp } from "firebase/app";
import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDy_2iaZT7P5BQTtBODhSnkEG9JPgGA7GI",
    authDomain: "crud-vue-e6e70.firebaseapp.com",
    projectId: "crud-vue-e6e70",
    storageBucket: "crud-vue-e6e70.appspot.com",
    messagingSenderId: "827784103038",
    appId: "1:827784103038:web:e0be8417e861d78857042f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//firebase.initializeApp(firebaseConfig)

const db = firebase.firestore

export {db}