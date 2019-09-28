var firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyD1aL7a4g8k9Q_z1bQro7oYsnWw60-PvhU",
    authDomain: "diversychat.firebaseapp.com",
    databaseURL: "https://diversychat.firebaseio.com",
    projectId: "diversychat",
    storageBucket: "diversychat.appspot.com",
    messagingSenderId: "753249131186",
    appId: "1:753249131186:web:2a7d2f8dcd5e9fd57cc7ab",
    measurementId: "G-6LEJQ3N0JV"
  }

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore(); 
let chatRef = db.collection('chat');

module.exports = {chatRef};