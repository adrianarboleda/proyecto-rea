import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import React from 'react';
import { Text, View } from 'react-native';


import LoginScreen from './components/Login';
import AboutScreen from './components/Register';
import HomeScreen from './components/Home';


class HomeScreen extends React.Component() {
  render(){
    return (
      <View style={styles.container}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home:{
    screen: LoginScreen
  },
  About:{
    screen: AboutScreen
  }
});

export default createAppContainer(AppNavigator);

