import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navigation ,} from 'react-native-navigation';
import App from './app/index.js'
import Navigator from './app/components/Navagator'
import Login from './app/components/Login'
import Card from './app/components/Card'
import firebase from react-native-firebase; 

import Login from './Login';
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.unsubscriber = null;
    this.state = {
      //isAuthenticated: false,
      people : [
        {
          name : "Jeff",
          age : 21,
          pic : null,
          gender : "male" 
        },
        {
          name : "Pamala",
          age : 95,
          pic : null,
          gender : "fluid"
        },
      ]
    }
  }

  componentWillMount() {
    firebase.initializeApp({
        apiKey: 'AIzaSyBQw7XFldcY7IM-hcaVRFFFIg1dCBcXrrg',
        authDomain: 'internhack2018.firebaseapp.com',
        databaseURL: 'https://internhack2018.firebaseio.com',
        projectId: 'internhack2018',
        storageBucket: 'internhack2018.appspot.com',
        messagingSenderId: '296714272629'
    });
  }

  componentDidMount() {
    this.unsubscriber = firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }

  componentWillUnmount() {
    if (this.unsubscriber) {
      this.unsubscriber();
    }
  }

  loadNewBuff = () => {

  }

  onPress = () => {
    this.setState({currentIndex : (this.state.currentIndex+1) % this.state.people.length});
    if (this.state.currentIndex == 0) {
      this.loadNewBuff();
    } 
  };

  yepPress = () => {
    this.onPress();
  };

  nopePress = () => {
    this.onPress();
  };

  getNavigator = () => {
    this.setState({currentPage : 
      <Navigator
      person={this.state.people[this.state.currentIndex]}
      onPress={this.onPress}
      yepPress={this.yepPress}
      nopePress={this.nopePress}
    />});    
  };
  
  render() {
    if (!this.state.user) {
      return <Login />;
    }

    //stack navigator
    //
    return (
      <View style={styles.container}>
        {this.state.currentPage}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App; 
