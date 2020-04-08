import React from 'react';
import {FlatList, Text, View, Image, TouchableHighlight} from 'react-native';
import { ventilators } from '../../data/dataArrays';
import { getNumberOfRecipes } from '../../data/MockDataAPI';
import React, {Component} from 'react';
import { Image, Button, Platform, StyleSheet, Text, View, Alert, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export default class VentilationScreen extends React.Component {
  static navigationOptions = {
    title: 'Ventilators'
  };

  constructor(props) {
    super(props);
  }

  onPressVentilator = item => {
    const title = item.name;
    const ventilator = item;
    this.props.navigation.navigate('RecipesList', { ventilator, title });
  };

  renderVentilator = ({ item }) => (
    <TouchableHighlight underlayColor='rgba(73,182,77,1,0.9)' onPress={() => this.onPressVentilator(item)}>
      <View style={styles.ventilatorsItemContainer}>
        <Image style={styles.ventilatorsPhoto} source={{ uri: item.photo_url }} />
        <Text style={styles.ventilatorsName}>{item.name}</Text>
        <Text style={styles.ventilatorsInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
      </View>
    </TouchableHighlight>
  );

  render() {
    return (
      <View>
        <FlatList
          data={ventilators}
          renderItem={this.renderVentilator}
          keyExtractor={item => `${item.id}`}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ventilatorsItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  ventilatorsPhoto: {
    width: '100%',
    height: 155,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  ventilatorsName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
  ventilatorsInfo: {
    marginTop: 3,
    marginBottom: 5
  }
});