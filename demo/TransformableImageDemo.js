'use strict';

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions
} from 'react-native';

import ViewTransformer from 'react-native-view-transformer';

const {width, height} = Dimensions.get('window');

export default class Demo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View
        style={{flex: 1, alignItems: 'center'}}>
        <ViewTransformer.Image
          style={{width: width, height: height - 100}}
          source={{uri: 'http://ww2.sinaimg.cn/large/005yl0q6jw1esai5n7vxjj31kw2dc4qp.jpg'}}
          pixels={{width: 2048, height: 3072}}
        />

        <Text style={{fontSize: 16, margin: 10}}>
          Image component supporting pinch, taps and scroll. The 'pixels' prop must be provided to detect the edge of image content.
        </Text>
      </View>
    );
  }

}