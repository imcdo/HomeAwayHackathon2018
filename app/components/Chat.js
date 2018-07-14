import React, { Component } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { View, KeyboardAvoidingView } from 'react-native';
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    messages: [],
  };

  componentWillMount() {

    // var record = firebase.database().ref('channels');
    //   record.on('value', function(snapshot) {
    //     this.setState(messages, snapshot.val());
    // });
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello developer',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'React Native',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    });
    
      }

  onSend(messages = []) {

    // Get a reference to the database service
    var database = firebase.database();
    var ref = database.ref('channels');

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    console.log(messages[0]['text']);
   
    // ref.push({
    //     _id: 1,
    //     text: messages[0]['text'],
    //     createdAt: messages[0]['createdAt'],
    //     user: {
    //       _id: messages[0]['user']['_id'],
    //       name: "React native",
    //       avatar: "https://placeimg.com/140/140/any",
    //     },
    // });
    
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          keyboardShouldPersistTaps={'handled'}
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          isAnimated='true'
          user={{
            _id: 1,
          }}
        />
        <KeyboardAvoidingView 
          behavior={'padding'}
        />
      </View>
    );
  }
}

