import { Text } from 'react-native';
import React, { Component } from 'react';
import { recipes, ventilators, ingredients } from './dataArrays';
import firebase from 'firebase';

// Initialize FireBase
var config = {
  apiKey: "AIzaSyBNeeXQOz2-S3sk5bP_clXvLd3iLnPYeOg",
  authDomain: "https://covid-19-ventilator-training.firebaseapp.com",
  databaseURL: "https://covid-19-ventilator-training.firebaseio.com/",
  storageBucket: "gs://covid-19-ventilator-training.appspot.com",
};

firebase.initializeApp(config);

//var datastore = firebase.database();

export function getCPRtext(page, section) {
  let description;
  firebase.database().ref('Clinician%20Pocket%20Reference/' + page + '/' + section + '/' + 'Description').once('value')
    .then(function(dataSnapshot) { 
      description = dataSnapshot;
      console.log(description);
      return description;
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


