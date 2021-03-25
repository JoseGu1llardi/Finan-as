import firebase from 'firebase/app'
import'firebase/auth'
import 'firebase/database'

let firebaseConfig = {
    apiKey: "AIzaSyBvHMdbFVb4IoyB6_hAiy4ehNuTfBBfC18",
    authDomain: "meuapp-2a62f.firebaseapp.com",
    databaseURL: "https://meuapp-2a62f-default-rtdb.firebaseio.com",
    projectId: "meuapp-2a62f",
    storageBucket: "meuapp-2a62f.appspot.com",
    messagingSenderId: "358955368509",
    appId: "1:358955368509:web:9504267989c7abf075ea54",
    measurementId: "G-K5959ZRW88"
  };
  if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;