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
import {BooText} from '../../component/BooText';
import {BooCharacterCard} from './component/BooCharacterCard';
import {HorizontalList} from '../../component/HorizontalList';

import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../../userReducer';

import axios from 'axios';
import API from '../../utils/record';

function DashBoardScreen({navigation, ...props}) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const [otherRecord, setOtherRecord] = useState([]);
  const userID = state.userID;
  const subcharacter = state.subcharacter;

  useEffect(() => {
    const getSubcharacter = async () => {
      await fetchSubcharacter(dispatch, userID);
      await API.getOtherPost(userID, setOtherRecord);
    };
    getSubcharacter();
  }, [dispatch, userID]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <ScrollView>
        <View style={styles.headerSection}>
          <BooText
            type="titleBold"
            color={colors.primary}
            textAlign="left"
            style={{position: 'absolute', top: 20, left: 20}}>
            BooFinder
          </BooText>

          <Image
            style={{
              width: 150,
              height: 150,
              alignSelf: 'flex-end',
              marginRight: 20,
            }}
            source={images.witchTemp}
          />

          <BooCard
            onPress={() => {
              navigation.push('BooEnrollScreen');
            }}
            w={350}
            h={45}
            positionX="center"
            positionY="center"
            style={{
              alignSelf: 'center',
              justifyContent: 'flex-end',
            }}
            backgroundColor={colors.primary}>
            <BooText type="subtitle" color={colors.white}>
              나만의 부캐 등록하기
            </BooText>
          </BooCard>
        </View>

        <HorizontalList listTitle="내 부캐 관리하기" horizontal={true}>
          {subcharacter.map(data => {
            return (
              <BooCharacterCard
                image={images.boy}
                key={data.subcharacter_id}
                onPress={() => navigation.push('RecordScreen')}>
                {data.title}
              </BooCharacterCard>
            );
          })}
        </HorizontalList>

        <HorizontalList listTitle="다른 유저 활동 보기" horizontal={true}>
          {otherRecord.map(data => {
            return (
              <BooCharacterCard
                image={images.boy}
                key={data.post_id}
                onPress={() => navigation.push('RecordScreen')}>
                {data.content}
              </BooCharacterCard>
            );
          })}
        </HorizontalList>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 300,
    paddingBottom: 20,
  },
});

export default DashBoardScreen;
