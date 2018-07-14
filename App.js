import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Typography from '@material-ui/core/Typography';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <text>hi</text>
        <Typography>Hi</Typography>
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
