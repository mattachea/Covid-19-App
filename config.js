import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBNeeXQOz2-S3sk5bP_clXvLd3iLnPYeOg",
  authDomain: "covid-19-ventilator-training.firebaseapp.com",
  databaseURL: "https://covid-19-ventilator-training.firebaseio.com",
  projectId: "covid-19-ventilator-training",
  storageBucket: "covid-19-ventilator-training.appspot.com",
  messagingSenderId: "25658178614",
  appId: "1:25658178614:web:0b1acea69309b56e2e6c97",
  measurementId: "G-X4TNFM04Y9"
};

export const app = firebase.initializeApp(firebaseConfig);
export const storageRef = app.storage();
export const db = app.database();
