import React from 'react';
import {View, StyleSheet} from 'react-native';

const Circle_View = ({
  radius = 50,
  content,
  style = styles.circle,
  modify_style = {},
}) => {
  return (
    <View
      style={[
        style,
        modify_style,
        {height: 2 * radius, width: 2 * radius, borderRadius: radius},
      ]}>
      {content}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderWidth: 0.5,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Circle_View;
