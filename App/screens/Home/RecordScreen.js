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
} from '../../config/globalStyles';

import {useUsersState, useUsersDispatch} from '../../userReducer';

function RecordScreen({navigation, ...props}) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const userID = state.userID;
  const subcharacterID = state.userID;

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <Text>부캐 글 읽는 페이지</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flex: 0.4,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: height * 20,
  },
});

export default RecordScreen;
