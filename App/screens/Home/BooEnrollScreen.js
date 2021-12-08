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
import ImagePicker from 'react-native-image-crop-picker';
import {
  colors,
  fontSizes,
  fontWeight,
  images,
  width,
  height,
} from '../../config/globalStyles';
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
  const [secret, setSecret] = useState(0);

  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const userID = state.userID;

  const [image, setImage] = useState('');

  useEffect(() => {
    const getSubcharacter = () => {
      fetchSubcharacter(dispatch, userID);
    };
    getSubcharacter();
  }, [dispatch, userID]);

  var formData = new FormData();
  formData.append('file', image);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <ScrollView>
        <View style={styles.headerSection}>
          <View>
            <TouchableOpacity
              style={styles.imageSection}
              onPress={() => {
                ImagePicker.openPicker({
                  width: 350,
                  height: 280,
                  cropping: true,
                }).then(data => {
                  setImage({
                    uri: data.path,
                    type: data.mime,
                    name: data.filename,
                  });
                });
              }}>
              {image ? (
                <Image
                  resizeMode="cover"
                  source={{uri: image.uri}}
                  style={{
                    width: 350,
                    height: 280,
                    alignSelf: 'center',
                  }}
                />
              ) : (
                <Image
                  source={images.camera}
                  style={{
                    width: 50,
                    height: 50,
                    tintColor: colors.primaryB,
                    alignSelf: 'center',
                    justifyContent: 'center',
                    alignContent: 'center',
                    alignItems: 'center',
                  }}
                />
              )}
            </TouchableOpacity>

            <BooText color={colors.textGrey} type="content">
              부캐릭터 이름을 정해주세요
            </BooText>
            <TextInput
              style={styles.titleInput}
              placeholder="부캐릭터 이름을 정해주세요"
              autoFocus={true}
              value={title}
              multiline={true}
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
              multiline={true}
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
              multiline={true}
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

            <View
              style={{
                alignSelf: 'flex-start',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              {secret === 0 ? (
                <TouchableOpacity
                  onPress={() => {
                    setSecret(1);
                  }}>
                  <Image
                    style={{
                      marginRight: 10,
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
                  <Image style={styles.unheart} source={images.secretCheck} />
                </TouchableOpacity>
              )}
              <Text>다른 유저에게 글을 공개합니다</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={async () => {
              await API.postSubCharacter(
                userID,
                title,
                subtitle,
                goal,
                date,
                image,
                secret,
              );
              await fetchSubcharacter(dispatch, userID);
              navigation.push('DashBoardScreen');
            }}
            style={styles.sumbitButton}>
            <Text style={{color: colors.white}}>작성완료</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageSection: {
    width: 340,
    height: 280,
    alignSelf: 'center',
    borderColor: colors.lightGrey,
    borderRadius: 20,
    borderWidth: 3,
    justifyContent: 'center',
    marginBottom: 40,
  },
  headerSection: {
    height: Dimensions.get('window').height,
    width: 340,
    alignSelf: 'center',
    marginTop: 50,
  },
  titleInput: {
    fontSize: fontSizes.md,
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
  unheart: {
    marginRight: 10,
    width: 25,
    height: 25,
    tintColor: colors.darkGrey,
  },
  sumbitButton: {
    width: 100,
    height: 30,
    backgroundColor: colors.primary,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default BooEnrollScreen;
