import { Text } from 'react-native';
import React, { Component } from 'react';
import { recipes, ventilators, ingredients } from './dataArrays';
import * as firebase from 'firebase';

// Initialize FireBase
var config = {
  apiKey: "AIzaSyBNeeXQOz2-S3sk5bP_clXvLd3iLnPYeOg",
  authDomain: "covid-19-ventilator-training.firebaseapp.com",
  databaseURL: "https://covid-19-ventilator-training.firebaseio.com/",
  storageBucket: "gs://covid-19-ventilator-training.appspot.com",
};

firebase.initializeApp(config);
var datastore = firebase.database();

// Sample API function
setupHighscoreListener(userId) {
  datastore.ref('users/' + userId).on('value', (snapshot) => {
    const highscore = snapshot.val().highscore;
    console.log("New high score: " + highscore);
  });
}

export function getVentilatorById(ventilatorId) {
  let ventilator;
  ventilators.map(data => {
    if (data.id == ventilatorId) {
      ventilator = data;
    }
  });
  return ventilator;
}


