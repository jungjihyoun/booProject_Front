/* eslint-disable no-alert */
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
} from 'react-native';
import StateContext from '../../StateContext';
import DispatchContext from '../../DispatchContext';

import axios from 'axios';
import {
  height,
  width,
  colors,
  fontSizes,
  fontWeight,
  images,
} from '../../config/globalStyles';

function SetEmailScreen({navigation}) {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);
  const [text, setText] = useState('');

  const saveText = event => {
    setText(event);
  };

  const goToCodePage = async () => {
    appDispatch({
      type: 'setEmail',
      userEmail: text,
    });
    // 이메일 중복 체크
    await axios
      .post('http://localhost:8080/auth/checkEmail', {
        userEmail: text,
      })
      .then(function (response) {
        if (!response.data.tf) {
          alert('중복된 이메일 입니다');
        } else {
          // 인증코드 메일 보내기
          axios
            .post('http://localhost:8080/auth/emailAuth', {
              userEmail: text,
            })
            .then(function (res) {
              // 인증번호 받고 클라이언트 측에 저장
              console.log(res.data);
              appDispatch({
                type: 'setCode',
                userCode: res.data,
              });
            });
          navigation.navigate('SetCodeScreen', {});
        }
      });
  };

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.titleSection}>
        <Text style={styles.mainLogoText}>BooFinder </Text>
        <Text style={styles.signUpTitle}>간편 회원가입</Text>
        {/* <Image style={styles.logoImage} source={images.puzzle} /> */}
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.contentText}>
          회원가입을 위해 이메일을 입력해주세요
        </Text>
        <TextInput
          style={styles.loginInput}
          onChangeText={saveText}
          placeholder="이메일"
          keyboardType="numeric"
        />
      </View>

      <TouchableOpacity
        style={styles.bottomSection}
        onPress={() => {
          goToCodePage();
        }}>
        {text.includes('@') && (
          <Text style={styles.bottomText}>인증번호 받으러가기 </Text>
        )}
      </TouchableOpacity>
    </SafeAreaView>
  );
}

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
    fontSize: fontSizes.lg,
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
    height: height * 58,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.darkGrey,
    color: colors.darkGrey,
    fontSize: fontSizes.lg,
  },
});

export default SetEmailScreen;
