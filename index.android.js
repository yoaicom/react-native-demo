import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import Demo from './Demo';

class AwesomeProject extends Component {
  render() {
    return (
      <Demo />
    );
  }
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
