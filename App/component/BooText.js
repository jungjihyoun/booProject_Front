import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {fontSizes, fontWeight, height, width} from '../config/globalStyles';

function BooText({color, textAlign, ...props}) {
  return (
    <Text
      style={{
        ...styles[props.style],
        color: color,
        textAlign: textAlign,
      }}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  // Title
  header: {
    fontSize: fontSizes.xl,
  },
  title: {
    fontSize: fontSizes.lg,
  },
  titleBold: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeight.bold,
  },

  subtitle: {
    fontSize: fontSizes.md,
    fontWeight: fontWeight.regular,
  },
  subtitleBold: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeight.bold,
  },

  content: {
    fontSize: fontSizes.sm,
  },
});

export {BooText};
