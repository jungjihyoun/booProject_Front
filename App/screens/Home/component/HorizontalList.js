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
} from '../../../config/globalStyles';

// import {BooCard} from '../../component/BooCard';
import {BooCharacterCard} from '../component/BooCharacterCard';
// import {BooText} from '../../component/BooText';

import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../../../userReducer';

import axios from 'axios';

function HorizontalList({navigation, listTitle, ...props}) {
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
    <SafeAreaView
      style={{
        flex: 0.4,
      }}>
      <Text
        style={{
          fontSize: fontSizes.md,
          color: colors.primary,
          fontWeight: fontWeight.bold,
          margin: 20,
        }}>
        {listTitle}
      </Text>
      <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
        {state.subcharacter.map(data => {
          return (
            <BooCharacterCard image={images.ji} key={data.title}>
              {data.title}
            </BooCharacterCard>
          );
        })}
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
