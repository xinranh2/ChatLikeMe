/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/**
 * Source: https://blog.jscrambler.com/build-a-chatbot-with-dialogflow-and-react-native/
 */

import React, {Component} from 'react';
import {View} from 'react-native';

import {GiftedChat} from 'react-native-gifted-chat';
import {Dialogflow_V2} from 'react-native-dialogflow';
import {dialogflowConfig} from './services/env.js';

const BOT_USER = {
  _id: 2,
  name: 'Mr bot',
  avatar: './nameko.jpeg',
};

class App extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text: 'Hi! I am bot. \n\n How are you?',
        createdAt: new Date(),
        user: BOT_USER,
      },
    ],
  };

  // When the App.js file renders, this function is the first thing it renders
  // Set the configuration of Dialogflow here.
  componentDidMount() {
    Dialogflow_V2.setConfiguration(
      dialogflowConfig.client_email,
      dialogflowConfig.private_key,
      Dialogflow_V2.LANG_ENGLISH_US,
      dialogflowConfig.project_id,
    );
  }

  // Triggered when the user clicks send.
  onSend(messages = []) {
    // User message is stored in the state variable.
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    let message = messages[0].text;
    // Send a request to Dialogflow
    Dialogflow_V2.requestQuery(
      // Send the message
      message,
      // If successful, trigger handle response
      result => this.handleGoogleResponse(result),
      error => console.log(error),
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let msg = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: BOT_USER,
    };

    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, [msg]),
    }));
  }

  render() {
    return (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <GiftedChat
          messages={this.state.messages}
          onSend={messages => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
      </View>
    );
  }
}

export default App;
