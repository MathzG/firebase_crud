import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAh1WtpZw9iXjhsh-QtDLoNi-ghdUbBQAk",
    authDomain: "react-crud-d2116.firebaseapp.com",
    databaseURL: "https://react-crud-d2116.firebaseio.com",
    projectId: "react-crud-d2116",
    storageBucket: "react-crud-d2116.appspot.com",
    messagingSenderId: "194409796554",
    appId: "1:194409796554:web:dc89fa8a76dafe49443533"
  };
  // Initialize Firebase
  var fireDb = firebase.initializeApp(firebaseConfig);
  export default fireDb.database().ref();