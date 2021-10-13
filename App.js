import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//React Navigation Stack
import RootStack from './navigators/RootStack';


export default function App() {
  return <RootStack />
}