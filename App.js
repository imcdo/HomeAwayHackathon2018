import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Card from './app/components/Card'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }
  
  render() {
    //stack navigator
    //
    return (
      <View style={styles.container}>
        <Text>bye</Text>
        <Card
          person={}
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
