import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/components/Card'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people : {
        jeff : {
          Name : "Jeff",
          Age : 12,
          Pic : null,
          Gender : "male" 
        }
      }
    };
  }
  
  render() {
    //stack navigator
    //
    return (
      <View style={styles.container}>
        <Text>bye</Text>
        <Card
          person={this.state.people.jeff}
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
