import React from 'react';
import {View, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Circle_View = ({
  radius = 50,
  content,
  style = styles.circle,
  modify_style = {},
  if_gradient = [false, ['#ddd', '#ddd'], 'vertical'],
}) => {
  return if_gradient[0] !== false ? (
    <LinearGradient
      colors={if_gradient[1]}
      start={if_gradient[2] !== 'horizontal' ? {x: 0, y: 1} : {x: 0, y: 0.5}}
      end={if_gradient[2] !== 'horizontal' ? {x: 0, y: 0} : {x: 1, y: 0.5}}
      style={[
        style,
        modify_style,
        {height: 2 * radius, width: 2 * radius, borderRadius: radius},
      ]}>
      {content}
    </LinearGradient>
  ) : (
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
