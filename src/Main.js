import React from 'react';
import { View, StatusBar } from 'react-native';

import { ColorDisplayContainer } from './containers/ColorDisplayContainer';

export default class Main extends React.Component {
  render() {
    return <View style={{ flex: 1 }}>
      <StatusBar hidden={true} />
      <ColorDisplayContainer />
    </View>
  }
}