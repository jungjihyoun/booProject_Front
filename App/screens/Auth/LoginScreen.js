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
import {
  height,
  width,
  colors,
  fontSizes,
  fontWeight,
} from '../../config/globalStyles';
import {
  useUsersState,
  useUsersDispatch,
  fetchSubcharacter,
} from '../../userReducer';
import API from '../../utils/auth';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useUsersDispatch();

  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.appTitleArea}>
        <Text style={styles.mainLogoText}>BooFinder</Text>
      </View>

      <View style={{flex: 1}}>
        <TextInput
          style={styles.loginInput}
          onChangeText={e => {
            setEmail(e);
          }}
          value={email}
          placeholder="아이디"
        />

        <TextInput
          style={styles.loginInput}
          onChangeText={e => {
            setPassword(e);
          }}
          value={password}
          placeholder="비밀번호"
        />
      </View>

      <View style={{flex: 0.5}}>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={async () => {
            // await dispatch({
            //   type: 'setEmail',
            //   userEmail: email,
            // });

            // await dispatch({
            //   type: 'setPassword',
            //   userEmail: password,
            // });

            // await API.login(
            //   email,
            //   password,
            //   navigation.navigate('HomeApp'),
            //   dispatch,
            // );
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

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SetEmailScreen');
          }}>
          <Text style={styles.aboutSignUp}>회원가입</Text>
        </TouchableOpacity>
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
