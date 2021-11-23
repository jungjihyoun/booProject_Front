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

import {BooCard} from '../../component/BooCard';
import {BooCharacterCard} from './component/BooCharacterCard';
import {BooText} from '../../component/BooText';

import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../../userReducer';

import axios from 'axios';

function DashBoardScreen({navigation, ...props}) {
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
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors.lightGrey,
      }}>
      <View style={styles.headerSection}>
        <BooCard
          w={228}
          h={167}
          padding={15}
          positionX="flex-start"
          backgroundColor={colors.darkGrey}>
          <BooText style="title" color={colors.white}>
            안녕하세요
          </BooText>
          <BooText style="title" color={colors.white}>
            지현님
          </BooText>
        </BooCard>

        <BooCard
          w={135}
          h={167}
          positionX="center"
          positionY="center"
          backgroundColor={colors.primary}>
          <BooText style="subtitle" color={colors.white}>
            나만의 부캐{`\n`}등록하기
          </BooText>
        </BooCard>
      </View>

      <ScrollView
        style={{
          width: width * 400,
          height: height * 400,
        }}>
        <View
          style={{
            alignSelf: 'center',
          }}>
          {state.subcharacter.map(data => {
            return (
              <BooCharacterCard image={images.ji} key={data.title}>
                {data.title}
              </BooCharacterCard>
            );
          })}
        </View>
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

export default DashBoardScreen;
