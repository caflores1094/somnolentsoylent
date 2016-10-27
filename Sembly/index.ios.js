/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import NavMenu from './app/components/NavMenu.js';
import App from './app/components/App.js';
import TopBar from './app/components/TopBar.js';
import MapView from 'react-native-maps'

export default class Sembly extends Component {
  render() {
    console.log(MapView);
    return (
        <MapView style={styles.map} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  map: {
  ...StyleSheet.absoluteFillObject,
  }
});

AppRegistry.registerComponent('Sembly', () => Sembly);
