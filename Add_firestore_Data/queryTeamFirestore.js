const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyCJh71uIEDWj38pdn5A5-Xd9y0hlew4VO4",
    authDomain: "wat-help-d0241.firebaseapp.com",
    databaseURL: "https://wat-help-d0241.firebaseio.com",
    projectId: "wat-help-d0241",
    storageBucket: "wat-help-d0241.appspot.com",
    messagingSenderId: "996601600606"
});

var db = firebase.firestore();

db.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});