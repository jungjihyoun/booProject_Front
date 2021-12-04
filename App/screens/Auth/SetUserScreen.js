/* eslint-disable react-native/no-inline-styles */
import React, {useState, useContext} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Platform,
  Button,
} from 'react-native';

import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../../userReducer';

import axios from 'axios';
import {
  height,
  width,
  colors,
  fontSizes,
  fontWeight,
  images,
} from '../../config/globalStyles';
import DatePicker from 'react-native-date-picker';

const SetUserScreen = ({navigation}) => {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  // const [date, setDate] = useState(new Date());

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [birth, setBirth] = useState(new Date());

  const setUserBirth = e => {
    dispatch({
      type: 'setEmail',
      userEmail: birth,
    });
    setBirth(e);
  };
  const saveText = (type, event) => {
    if (type === 'userName') {
      setUserName(event);
    } else {
      setPassword(event);
    }
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.titleSection}>
        <Text style={styles.mainLogoText}>BooFinder </Text>
        <Text style={styles.signUpTitle}>프로필 설정</Text>
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.contentText}>닉네임을 입력해 주세요[필수]</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={e => {
            saveText('userName', e);
          }}
          placeholder="이름"
          keyboardType="numeric"
        />

        <Text style={styles.contentText}>비밀번호를 설정해주세요[필수]</Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={e => {
            saveText('password', e);
          }}
          placeholder="대소문자,숫자 포함 6글자 이상"
          keyboardType="numeric"
        />

        <Text style={styles.contentText}>생년월일을 입력해주세요[선택]</Text>
        <DatePicker
          style={{height: 100}}
          date={birth}
          onDateChange={date => {
            setUserBirth(date);
          }}
          mode="date"
        />
      </View>

      <TouchableOpacity
        style={styles.bottomSection}
        onPress={async () => {
          dispatch({
            type: 'setName',
            userName: userName,
          });
          dispatch({
            type: 'setPassword',
            userPassword: password,
          });
          dispatch({
            type: 'setBirth',
            userBirth: birth.toDateString(),
          });
          navigation.navigate('DashBoardScreen', {
            // content: content,
            // noteTitle: route.params.title,
          });
          await axios
            .post('http://localhost:8080/setUser', {
              user_id: '12345',
              password: 'wlgus',
              username: 'jihyoun',
              birthday: '1998-06-02',
              email: 'jihyoun0602@khu.ac.kr',
            })
            .then(function (response) {
              console.log(response);
            });
        }}>
        <Text style={styles.bottomText}>홈화면으로</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  titleSection: {
    flex: 0.5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignSelf: 'flex-start',
    paddingTop: height * 90,
    marginLeft: width * 30,
  },
  contentSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  bottomSection: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginRight: width * 25,
  },
  bottomText: {
    color: colors.primary,
    fontWeight: fontWeight.bold,
    fontSize: fontSizes.md,
    height: height * 100,
  },
  mainLogoText: {
    fontSize: fontSizes.md,
    fontWeight: fontWeight.bold,
    color: colors.primary,
  },
  signUpTitle: {
    fontSize: fontSizes.md,
    color: colors.primary,
    flexDirection: 'column',
    // marginTop: 4,
  },
  contentText: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeight.bold,
    color: colors.black,
    marginBottom: 10,
  },
  logoImage: {
    width: 40,
    height: 50,
    // tintColor: colors.primary,
  },
  loginInput: {
    width: width * 343,
    height: height * 30,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.darkGrey,
    color: colors.darkGrey,
    fontSize: fontSizes.sm,
    marginBottom: height * 50,
  },
});

export default SetUserScreen;
