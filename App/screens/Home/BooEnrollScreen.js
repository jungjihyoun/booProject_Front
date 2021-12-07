/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
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
import {BooText} from '../../component/BooText';
import API from '../../utils/subCharacter';
import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../../userReducer';

import axios from 'axios';

function BooEnrollScreen({navigation, ...props}) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [goal, setGoal] = useState('');
  const [date, setDate] = useState('');

  const state = useUsersState();
  const dispatch = useUsersDispatch();
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
        backgroundColor: colors.white,
      }}>
      <ScrollView>
        <View style={styles.headerSection}>
          <View>
            <BooText color={colors.textGrey} type="content">
              부캐릭터 이름을 정해주세요
            </BooText>
            <TextInput
              style={styles.titleInput}
              placeholder="부캐릭터 이름을 정해주세요"
              autoFocus={true}
              value={title}
              onChangeText={e => {
                setTitle(e);
              }}
            />
            <BooText color={colors.textGrey} type="content">
              부캐릭터에 대한 설명을 적어주세요
            </BooText>
            <TextInput
              style={styles.titleInput}
              placeholder="간단하게 설명해주세요"
              autoFocus={false}
              value={subtitle}
              onChangeText={e => {
                setSubtitle(e);
              }}
            />
            <BooText color={colors.textGrey} type="content">
              이루고싶은 목표가 있으신가요?
            </BooText>
            <TextInput
              style={styles.titleInput}
              placeholder="시작이 반이에요!"
              autoFocus={false}
              value={goal}
              onChangeText={e => {
                setGoal(e);
              }}
            />
            <BooText color={colors.textGrey} type="content">
              부캐릭터를 시작한 날짜를 적어주세요
            </BooText>
            <TextInput
              keyboardType="numeric"
              style={styles.titleInput}
              placeholder="(19980602 형태로 적어주세요)"
              autoFocus={false}
              value={date}
              onChangeText={e => {
                setDate(e);
                console.log(e);
              }}
            />
          </View>
          <TouchableOpacity
            onPress={async () => {
              console.log(123);
              await API.postSubCharacter(userID, title, subtitle, goal, date);

              await fetchSubcharacter(dispatch, userID);

              navigation.push('DashBoardScreen');
            }}
            style={{
              position: 'absolute',
              bottom: 250,
              width: 100,
              height: 30,
              backgroundColor: colors.primary,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
            }}>
            <Text style={{color: colors.white}}>작성완료</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    height: Dimensions.get('window').height,
    width: 340,
    alignSelf: 'center',
    marginTop: 50,
  },
  titleInput: {
    fontSize: fontSizes.lg,
    marginTop: 10,
    marginBottom: 50,
  },
  contentInput: {
    fontSize: fontSizes.mg,
    alignSelf: 'center',
    margin: 30,
    width: width * 340,
  },
  dateText: {
    fontSize: fontSizes.md,
  },
});

export default BooEnrollScreen;
