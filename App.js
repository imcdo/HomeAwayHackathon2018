import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigator from './app/components/Navagator'
import Login from './app/components/Login'
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people : [
        {
          name : "Jeff",
          age : 12,
          pic : null,
          gender : "male" ,
          trips : [{
            location : "New York",
            dates : "12-24-18 - 12-27-17",
            num_days : 2
          },]
        },
        {
          name : "Pamala",
          age : 95,
          pic : null,
          gender : "fluid",
          trips : [{
            location : "New York",
            dates : "12-24-18 - 12-27-17",
            num_days : 2
          },]
        },

      ],
      currentIndex : 0,
      
      currentPage : nav,
    };
    const nav = <Navigator
    person={this.state.people[this.state.currentIndex]}
    onPress={this.onPress}
    yepPress={this.yepPress}
    nopePress={this.nopePress}
  />
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
    //stack navigator
    //
    return (
      <View style={styles.container}>
        <Navigator
          person={this.state.people[this.state.currentIndex]}
          onPress={this.onPress}
          yepPress={this.yepPress}
          nopePress={this.nopePress}
        />
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
