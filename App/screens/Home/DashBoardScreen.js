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
import {HorizontalList} from './component/HorizontalList';

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
  const subcharacterID = state.userID;

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
        backgroundColor: colors.white,
      }}>
      <View style={styles.headerSection}>
        <BooText type="title" color={colors.black}>
          쿨럭
        </BooText>

        <BooCard
          onPress={() => {
            // axios
            //   .post('http://localhost:8080/auth/setUser', {
            //     user_id: '12345',
            //     password: 'wlgus',
            //     username: 'jihyoun',
            //     birthday: '1998-06-02',
            //     email: 'jihyoun0602@khu.ac.kr',
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   });
            // axios
            //   .post(`http://localhost:8080/subCharacter/record/${userID}`, {
            //     // subcharacter_id: 'abc2',
            //     startDate: '2020-09-19',
            //     title: 'sssss 2',
            //     subtitle: 'ssss',
            //     goal: 'sss',
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   });
            axios
              .post(`http://localhost:8080/record/post/${userID}/B2Vhh2xBg1`, {
                // subcharacter_id: 'abc2',
                content: '포스트 12 테스트',
                feeling: '만족스러워요',
                secret: 1,
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(err => {
                console.log(err);
              });
            // axios
            //   .delete(
            //     `http://localhost:8080/subCharacter/post/${userID}/${subcharacterID}`,
            //   )
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   });
            // postid 추가
            // axios
            //   .delete(`http://localhost:8080/record/post/${userID}/5`)
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   });
            // axios
            //   .post(`http://localhost:8080/record/likes/tester02/3`, {
            //     likeState: true,
            //   })
            //   .then(function (response) {
            //     console.log(response);
            //   })
            //   .catch(err => {
            //     console.log(err);
            //   });
          }}
          w={135}
          h={167}
          positionX="center"
          positionY="center"
          backgroundColor={colors.primary}>
          <BooText type="subtitle" color={colors.white}>
            나만의 부캐{`\n`}등록하기
          </BooText>
        </BooCard>
      </View>

      <HorizontalList listTitle="내 부캐 관리하기" />
      <HorizontalList listTitle="다른 부캐 구경하기" />
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

export default DashBoardScreen;
