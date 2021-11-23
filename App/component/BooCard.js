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
  ...props
}) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={{
          ...styles.card,
          width: width * w,
          height: height * h,
          backgroundColor: backgroundColor,
          justifyContent: positionY,
          alignItems: positionX,
          padding: padding,
        }}>
        {props.children}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
  },
});

export {BooCard};
