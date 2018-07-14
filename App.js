import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/components/Card'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people : [
        {
          name : "Jeff",
          age : 12,
          pic : null,
          gender : "male" 
        },
        {
          name : "Pamala",
          age : 95,
          pic : null,
          gener : "fluid"
        },

      ],
      currentIndex : 0,
    };
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
  
  render() {
    //stack navigator
    //
    return (
      <View style={styles.container}>
        <Text>bye</Text>
        <Card
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
