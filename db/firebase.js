var firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = {
    apiKey: process.env.FIREBASE_KEY,
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
let chatRefEngish = db.collection('chat-en');
let chatRefSpanish = db.collection('chat-es');
let chatRefChinese = db.collection('chat-zh');
let chatRefJapanese = db.collection('chat-ja');
let chatRefHindi = db.collection('chat-hi');

module.exports = {chatRef, chatRefEngish, chatRefSpanish, chatRefChinese, chatRefJapanese, chatRefHindi};