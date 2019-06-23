const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyDll8W-fibwM_jClufRiqCsRlGeA7Dl9pw",
    authDomain: "wat-health.firebaseapp.com",
    databaseURL: "https://wat-health.firebaseio.com",
    projectId: "wat-health",
    storageBucket: "wat-health.appspot.com",
    messagingSenderId: "423883429632",
    appId: "1:423883429632:web:995d41f227e30a8a"
});

var db = firebase.firestore();

// Add a document with a generated ID.
db.collection("Emotions").add({
    Analytical: 1,
    Anger: 1,
    Confident: 1,
    Fear: 1,
    Joy: 1,
    Sadness: 1,
    Tentative: 1,
    Time: firebase.firestore.FieldValue.serverTimestamp() // current time on the server
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

//------- POSTS
db.collection("Posts").add({
    Title: "Need help",
    User: "Anon",
    comment: "I've been feeling very down lately. Nothing seems to be going right. Is there a professional here I can talk to?",
    postDate: firebase.firestore.FieldValue.serverTimestamp() // time
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("Posts").add({
    Title: "Bipolar disorder help",
    User: "Anon",
    comment: "I am bipolar, and also have generalized anxiety disorder. I take many pills a day for these illnesses, and I am not always comfortable with telling people about this information. Yet people in my family keep telling their friends all the information about my hospitalizations, the medications I take, what they do, and basically everything to do with what I have been through. It makes me extremely uncomfortable to have random people knowing my whole story without me even meeting them. I don't know what to do, and when confronted, my family will just tell me that it's their business to share, because my mental health affects them too. It's extremely frustrating...",
    postDate: new firebase.firestore.Timestamp.fromDate(new Date("2018-10-10"+"T00:00:00")) // time
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("Posts").add({
    Title: "Feelings",
    User: "Mancho",
    comment: "I feel good today",
    postDate: new firebase.firestore.Timestamp.fromDate(new Date("2019-01-10"+"T00:00:00")) // time
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});
db.collection("Posts").add({
    Title: "Help?",
    User: "Anon",
    comment: "I'm in my early 50s. I'm not suicidal. I actually fear death more than almost anything else in this world, however, I feel like my life isn't valuable to anyone or anything, other than myself. I feel like all I am doing is taking up space on this planet and using up limited resources. In short, I feel guilty just for living.    My question is, how do I change this? What can I do to make myself valuable? Is it even possible anymore? I have no children. No mate. Not many friends. I keep mostly to myself and to be honest, I don't like being around others much anyway. Most of the other people I'm around are just as ugly as I am, so socializing is not much fun. Life is unpleasant and I mostly lay in bed all day or else vegetate in front of the computer. I live with my parents so I can do that for now but my parents are elderly and it worries me what will happen when they are gone.  I feel stuck and I can't even muster the will to lift a finger to do anything about all this. I just want to sit here and watch my life cave in. It's all I want to do anymore. It sort of feels like the right thing to do--like this is what I deserve, to sit here and passively watch as my world gradually falls apart around me.",
    postDate: new firebase.firestore.Timestamp.fromDate(new Date("2019-01-13"+"T00:00:00")) // time
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

db.collection("Posts").add({
    Title: "Struggling",
    User: "Anon",
    comment: "Hello everyone.  Not having the best start to the new year. I was in temp employment as a receptionist but the work has dried up and I was supposed to be starting somewhere else but that role got cancelled so I am unemployed now with zero income and no entitlement to benefits.   Also my gran died a few days ago and the funeral is soon. So I've been feeling pretty rubbish about that.   I just honestly don't feel like doing much. I was struggling with anxiety before Christmas due to my finances but I just don't have the motivation to do anything about it now. I'm also studying a course online and can only just manage to study the bear minimum of that before I feel exhausted by everything.  I was only working part time before in an undemanding job but since that finished I feel soo much more tired than I did when I had to get out my bed early. I was wanting to try get into a routing of getting up early so my sleep patterns could be better, but now I don't even care if I'm sleeping in middle of the day.   If sucks feeling like this 😔",
    postDate: new firebase.firestore.Timestamp.fromDate(new Date("2019-01-12"+"T00:00:00")) // time
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});


db.collection("Users").doc().collection("Emotions").add({
    timestamp: "13/Jan/2019",
    values: [0,1,0,0,0,0,0]
})
.then(function(docRef) {
    console.log("Document written with ID: ", docRef.id);
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});



/*

db.collection("Users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
*/