import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAS257cb6HUCS2UmxOUOjEGeFttAxcXnVE",
  authDomain: "covid-reference.firebaseapp.com",
  databaseURL: "https://covid-reference.firebaseio.com",
  projectId: "covid-reference",
  storageBucket: "covid-reference.appspot.com",
  messagingSenderId: "275615521425",
  appId: "1:275615521425:web:08f50c7983945c70a3bd30",
  measurementId: "G-FM96JGK28C"
};

export const app = firebase.initializeApp(firebaseConfig);
export const storageRef = app.storage();
export const db = app.database();
