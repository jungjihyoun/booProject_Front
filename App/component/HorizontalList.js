/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import {
  colors,
  fontSizes,
  fontWeight,
  images,
  width,
  height,
} from '../config/globalStyles';

import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../userReducer';

import axios from 'axios';

function HorizontalList({
  navigation,
  listTitle,
  horizontal,
  fontColor,
  style,
  ...props
}) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  // const subcharacter = state.subcharacter;
  const userID = state.userID;

  useEffect(() => {
    const getSubcharacter = () => {
      fetchSubcharacter(dispatch, userID);
    };
    getSubcharacter();
  }, [dispatch, userID]);

  return (
    <SafeAreaView>
      <View
        style={{
          borderTopColor: colors.lightGrey,
          borderTopWidth: 5,
          marginBottom: 10,
          height: props.height,
        }}
      />
      <Text
        style={{
          fontSize: fontSizes.md,
          color: fontColor,
          fontWeight: fontWeight.regular,
          margin: 20,
        }}>
        {listTitle}
      </Text>
      <ScrollView
        // bounces={false}
        showsHorizontalScrollIndicator={false}
        horizontal={horizontal}
        height={props.scrollHeight ? props.scrollHeight : 200}>
        {props.children}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: height * 20,
  },
});

export {HorizontalList};
