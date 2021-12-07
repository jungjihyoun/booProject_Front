import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {
  fontSizes,
  fontWeight,
  height,
  width,
  fonts,
} from '../config/globalStyles';

function BooText({color, textAlign, style, type, ...props}) {
  return (
    <Text
      style={{
        ...styles[type],
        ...style,

        color: color,
        textAlign: textAlign,
      }}>
      {props.children}
    </Text>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: fontSizes.xl,
    fontFamily: fonts.spoqaRegular,
  },
  title: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.spoqaRegular,
  },
  titleBold: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.spoqaBold,
  },

  subtitle: {
    fontSize: fontSizes.md,
    fontFamily: fonts.spoqaRegular,
  },
  subtitleBold: {
    fontSize: fontSizes.lg,
    fontFamily: fonts.spoqaBold,
  },
  content: {
    fontSize: fontSizes.sm,
    fontFamily: fonts.spoqaRegular,
  },
  contentXS: {
    fontSize: fontSizes.xs,
    fontFamily: fonts.spoqaRegular,
  },
});

export {BooText};
