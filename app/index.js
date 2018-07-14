import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navigation , createStackNavigator, StackNavigator} from 'react-native-navigation';

import MainNavigation from './screens/main-navigation'

const App = createStackNavigator({
    Home: { screen:  MainNavigation},
  });

  export default App;