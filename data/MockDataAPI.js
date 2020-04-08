import { Text } from 'react-native';
import React, { Component } from 'react';
import { recipes, ventilators, ingredients } from './dataArrays';
import * as firebase from 'firebase';

// Initialize FireBase
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

firebase.initializeApp(firebaseConfig);

var datastore = firebase.database();
//console.log(datastore);

export function getCPRtext(page, section) {
  let description;
  firebase.database().ref('Clinician%20Pocket%20Reference/' + page + '/' + section + '/' + 'Description').once('value').then(function(dataSnapshot) { 
    description = dataSnapshot;
    console.log(description);
  });
  return description;
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


