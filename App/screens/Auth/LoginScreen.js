/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
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

import axios from 'axios';
import {
  height,
  width,
  colors,
  fontSizes,
  fontWeight,
} from '../../config/globalStyles';

function LoginScreen({navigation}) {
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.appTitleArea}>
        <Text style={styles.mainLogoText}>BooFinder</Text>
      </View>

      <View style={{flex: 1}}>
        <TextInput
          style={styles.loginInput}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="아이디"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.loginInput}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="비밀번호"
          keyboardType="numeric"
        />
      </View>

      <View style={{flex: 0.5}}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={async () => {
            navigation.navigate('HomeApp');
          }}>
          <Text style={{color: colors.white}}>로그인</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
        }}>
        <Text style={styles.aboutSignUp}>아이디/비밀번호 찾기</Text>
        <Text style={styles.aboutSignUp}>회원가입</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  appTitleArea: {
    flex: 1.5,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainLogoText: {
    fontSize: fontSizes.appTitle,
    color: colors.primary,
  },
  loginInput: {
    width: width * 343,
    height: height * 48,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.darkGrey,
    marginBottom: 16,
    paddingLeft: 16,
  },
  loginButton: {
    backgroundColor: colors.primary,
    width: width * 181,
    height: height * 35,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    color: 'white',
  },

  aboutSignUp: {
    color: colors.primary,
    fontWeight: fontWeight.regular,
    fontSize: fontSizes.small,
    marginRight: 20,
  },
});

export default LoginScreen;
