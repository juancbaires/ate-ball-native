import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import HomeScreen from './HomeScreen'
import ProfileScreen from './ProfileScreen'
import Update from './HomeScreen'
import { createStackNavigator, createAppContainer } from 'react-navigation';

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    path: '/',
    navigationOptions: ({ navigations }) => ({
      title: "Ateball"
    }),
  },
  // Login: { screen: Login },
  // Signup: { screen: Signup },
  // EditProfile: { screen: EditProfile },
  Update: {
    screen: Update,
    path: 'update/',
  },
  Profile: { screen: ProfileScreen },
});
const AppContainer = createAppContainer(MainNavigator);


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
