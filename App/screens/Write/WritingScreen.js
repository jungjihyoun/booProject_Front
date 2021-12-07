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
  Alert,
} from 'react-native';

import {
  colors,
  fontSizes,
  fontWeight,
  images,
  width,
  height,
  fonts,
} from '../../config/globalStyles';

import {BooCard} from '../../component/BooCard';
import {BooText} from '../../component/BooText';

import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../../userReducer';

import API from '../../utils/record';

function WritingScreen({navigation, ...props}) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const [subCharacterId, setSubcharacterId] = useState('');
  const [content, setContent] = useState('');
  const [feeling, setFeeling] = useState('');
  const [secret, setSecret] = useState(0);

  const userID = state.userID;
  const subcharacter = state.subcharacter;

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
        <BooText type="content" color={colors.textGrey}>
          {new Date().toDateString()}
        </BooText>

        <View style={{flex: 1, marginTop: 10}}>
          <BooText type="content" color={colors.primary}>
            부캐를 선택해주세요
          </BooText>

          <ScrollView
            style={{
              flexDirection: 'row',
            }}
            horizontal={true}>
            {subcharacter.map((data, i) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setSubcharacterId(data.subcharacter_id);
                  }}
                  key={i}
                  style={{
                    justifyContent: 'center',
                    height: 25,
                    borderRadius: 5,
                    marginRight: 10,
                    marginTop: 5,
                  }}>
                  <Text
                    style={{
                      fontSize:
                        subCharacterId === data.subcharacter_id
                          ? fontSizes.lg
                          : fontSizes.sm,
                      fontFamily:
                        subCharacterId === data.subcharacter_id
                          ? fonts.spoqaBold
                          : fonts.spoqaLight,
                      color:
                        subCharacterId === data.subcharacter_id
                          ? colors.primary
                          : 'black',
                    }}>
                    {data.title}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        <View style={{flex: 0 / 5}}>
          <BooText type="content" color={colors.primary}>
            오늘의 기분은 어떠신가요?
          </BooText>
          <TextInput
            style={styles.feelingInput}
            value={feeling}
            placeholder="오늘의 기분 및 만족도를 적어주세요"
            autoFocus={true}
            multiline={true}
            onChangeText={e => {
              setFeeling(e);
            }}
          />
        </View>
      </View>

      <View
        style={{
          borderTopColor: colors.lightGrey,
          width: width * 360,
          alignSelf: 'center',
          borderTopWidth: 4,
          marginBottom: 10,
          marginTop: 20,
          height: props.height,
        }}
      />
      <View
        style={{
          alignSelf: 'flex-end',
          marginRight: 25,
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <Text>부캐릭터 선택</Text>
        <Text>다른 유저에게 글을 공개합니다</Text>
        {secret === 0 ? (
          <TouchableOpacity
            onPress={() => {
              setSecret(1);
            }}>
            <Image
              style={{
                marginLeft: 10,
                width: 25,
                height: 25,
                tintColor: colors.lightGreen,
              }}
              source={images.secretCheck}
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              setSecret(0);
            }}>
            <Image
              style={{
                marginLeft: 10,
                width: 25,
                height: 25,
                tintColor: colors.darkGrey,
              }}
              source={images.secretCheck}
            />
          </TouchableOpacity>
        )}
      </View>
      <ScrollView>
        <View>
          <TextInput
            style={styles.contentInput}
            placeholder="오늘의 활동을 정리해주세요"
            value={content}
            autoFocus={false}
            multiline={true}
            onChangeText={e => {
              setContent(e);
            }}
          />
        </View>
      </ScrollView>
      <TouchableOpacity
        onPress={() => {
          API.postRecord(userID, subCharacterId, content, feeling, secret);
          setSubcharacterId('');
          setContent('');
          setFeeling('');
          setSecret(0);
          Alert.alert('글 작성이 완료되었습니다 !');
        }}
        style={{
          position: 'absolute',
          bottom: 50,
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
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    height: 140,
    width: 340,
    alignSelf: 'center',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  titleInput: {
    fontSize: fontSizes.lg,
    marginBottom: 5,
  },
  feelingInput: {
    fontSize: fontSizes.md,
    alignSelf: 'center',
    width: width * 340,
    fontFamily: fonts.spoqaLight,
  },
  contentInput: {
    marginTop: 20,
    fontSize: fontSizes.md,
    alignSelf: 'center',
    width: width * 340,
    fontFamily: fonts.spoqaLight,
    lineHeight: 30,
  },
  dateText: {
    fontSize: fontSizes.md,
  },
});

export default WritingScreen;
