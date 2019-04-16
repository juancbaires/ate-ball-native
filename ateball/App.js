import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});

const App = createAppContainer(MainNavigator);

export default App;
