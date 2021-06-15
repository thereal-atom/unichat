import firebase from "firebase/app"
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDM1AuN5C6ola-JmlWvu-DUza35hKRHL6E",
    authDomain: "unichat-33bb1.firebaseapp.com",
    projectId: "unichat-33bb1",
    storageBucket: "unichat-33bb1.appspot.com",
    messagingSenderId: "183636289348",
    appId: "1:183636289348:web:eb3e136a709b0d077c9911"
}).auth();