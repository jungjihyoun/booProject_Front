/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';
import {height, width} from '../config/globalStyles';

function BooCard({
  w,
  h,
  positionX,
  positionY,
  textAlign,
  padding,
  backgroundColor,
  onPress,
  style,
  ...props
}) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={onPress}
        style={{
          ...style,
          width: width * w,
          height: height * h,
          backgroundColor: backgroundColor,
          justifyContent: positionY,
          alignItems: positionX,
          padding: padding,
          borderRadius: props.borderRadius ? props.borderRadius : 10,
        }}>
        {props.children}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// const styles = StyleSheet.create({
//   card: {
//     borderRadius: 10,
//   },
// });

export {BooCard};
