import firebase from 'firebase'

  const firebaseConfig = {
    apiKey: "AIzaSyB_F6B-kCoN7a1gn9KMc0S8Wy-j3gNqcxI",
    authDomain: "twitter-clone-44eda.firebaseapp.com",
    projectId: "twitter-clone-44eda",
    storageBucket: "twitter-clone-44eda.appspot.com",
    messagingSenderId: "1075811372182",
    appId: "1:1075811372182:web:1a7bd6e58799178594c6b7",
    measurementId: "G-3GE0EYN8GN"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  export default db