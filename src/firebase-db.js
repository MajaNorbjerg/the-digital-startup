import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
  .initializeApp({
    apiKey: 'AIzaSyB9U3Ji7JQ5Wme61uczRns520Fg2q5wX-M',
    authDomain: 'digital-startup.firebaseapp.com',
    databaseURL: 'https://digital-startup.firebaseio.com',
    projectId: 'digital-startup',
    storageBucket: 'digital-startup.appspot.com',
    messagingSenderId: '13025564400',
    appId: '1:13025564400:web:0c94f3fc87d78454f91435'
  })
  .firestore()

export const postRef = db.collection('posts')
