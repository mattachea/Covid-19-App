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

export function getIngredientName(ingredientID) {
  let name;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      name = data.name;
    }
  });
  return name;
}

export function getIngredientUrl(ingredientID) {
  let url;
  ingredients.map(data => {
    if (data.ingredientId == ingredientID) {
      url = data.photo_url;
    }
  });
  return url;
}

export function getVentilatorName(ventilatorId) {
  let name;
  ventilators.map(data => {
    if (data.id == ventilatorId) {
      name = data.name;
    }
  });
  return name;
}

export function getRecipes(ventilatorId) {
  const recipesArray = [];
  recipes.map(data => {
    if (data.ventilatorId == ventilatorId) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}

// modifica
export function getRecipesByIngredient(ingredientId) {
  const recipesArray = [];
  recipes.map(data => {
    data.ingredients.map(index => {
      if (index[0] == ingredientId) {
        recipesArray.push(data);
      }
    });
  });
  return recipesArray;
}

export function getNumberOfRecipes(ventilatorId) {
  let count = 0;
  recipes.map(data => {
    if (data.ventilatorId == ventilatorId) {
      count++;
    }
  });
  return count;
}

export function getAllIngredients(idArray) {
  const ingredientsArray = [];
  idArray.map(index => {
    ingredients.map(data => {
      if (data.ingredientId == index[0]) {
        ingredientsArray.push([data, index[1]]);
      }
    });
  });
  return ingredientsArray;
}

// functions for search
export function getRecipesByIngredientName(ingredientName) {
  const nameUpper = ingredientName.toUpperCase();
  const recipesArray = [];
  ingredients.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      // data.name.yoUpperCase() == nameUpper
      const recipes = getRecipesByIngredient(data.ingredientId);
      const unique = [...new Set(recipes)];
      unique.map(item => {
        recipesArray.push(item);
      });
    }
  });
  const uniqueArray = [...new Set(recipesArray)];
  return uniqueArray;
}

export function getRecipesByVentilatorName(ventilatorName) {
  const nameUpper = ventilatorName.toUpperCase();
  const recipesArray = [];
  ventilators.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipes = getRecipes(data.id); // return a vector of recipes
      recipes.map(item => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
}

export function getRecipesByRecipeName(recipeName) {
  const nameUpper = recipeName.toUpperCase();
  const recipesArray = [];
  recipes.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      recipesArray.push(data);
    }
  });
  return recipesArray;
}
