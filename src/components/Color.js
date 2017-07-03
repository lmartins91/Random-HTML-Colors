import React, { PropTypes } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native';

import { ColorUtils } from '../utils/Color.Utils';

export const Color = ({ color, onPress }) => {
  
  const invertedColor = ColorUtils.invertColor(color.hex);
  
  return <TouchableWithoutFeedback onPress={onPress}>
    <View style={[styles.container, { backgroundColor: color.hex }]}>
      <Text style={{ fontSize: 32, color: invertedColor }}>{color.name}</Text>
      <Text style={{ fontSize: 16, color: invertedColor }}>{color.hex}</Text>
    </View>
  </TouchableWithoutFeedback>
}

Color.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    hex: PropTypes.string.isRequired
  }).isRequired,
  onPress: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 35
  }
});