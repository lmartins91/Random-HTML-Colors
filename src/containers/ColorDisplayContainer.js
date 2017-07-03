import React from 'react';

import { Color } from '../components/Color';
import { ColorUtils } from '../utils/Color.Utils';

export class ColorDisplayContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { color: null };
  }
  
  componentDidMount() {
    this.getNewColor();
  }
  
  getNewColor() {
    let color = ColorUtils.getRandomColor();
    if (this.state.color && color.name == this.state.color.name) {
      return this.getNewColor();
    }
    this.setState({ color });
  }
  
  render() {
    return this.state.color ?
      <Color color={this.state.color} onPress={this.getNewColor.bind(this)} /> :
      null;
  }
}