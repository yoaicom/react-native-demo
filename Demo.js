'use strict';

import React, { Component } from 'react';

import ImageDemo from './demo/TransformableImageDemo';
import ViewDemo from './demo/TransformableViewDemo';

export default class Demo extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ImageDemo />
      //<ViewDemo />
    );
  }
}