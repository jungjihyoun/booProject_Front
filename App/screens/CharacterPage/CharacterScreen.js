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
  Dimensions,
} from 'react-native';

import {
  colors,
  fontSizes,
  fontWeight,
  images,
  width,
  height,
} from '../../config/globalStyles';

import {BooCard} from '../../component/BooCard';
import {BooCharacterCard} from './component/BooCharacterCard';
import {BooText} from '../../component/BooText';

import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../../userReducer';

import axios from 'axios';

function CharacterScreen({navigation, route, ...props}) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const subcharacter = state.subcharacter;
  const userID = state.userID;
  //route에ㅐ서 받아오기
  const characterID = 'sub1';

  // useEffect(() => {
  //   const getSubcharacter = () => {
  //     fetchSubcharacter(dispatch, userID);
  //   };
  //   getSubcharacter();
  // }, [dispatch, userID]);
  const filterCharacter = () => {
    // return subcharacter.map(data => {
    //   return data.subcharacter_id === characterID;
    // });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          width: width * 400,
          height: width * 220,
          backgroundColor: colors.primary,
          borderBottomLeftRadius: width * 220,
          borderBottomRightRadius: width * 220,
        }}>
        {/* <Text>{filterCharacter().subcharacter_id}</Text> */}
      </View>

      <ScrollView
        style={{
          flex: 2,
          flexDirection: 'column',
        }}>
        <Text>scroll</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default CharacterScreen;
