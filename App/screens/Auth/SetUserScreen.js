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
  Button,
} from 'react-native';

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
  const [date, setDate] = useState(new Date());
  return (
    <SafeAreaView style={[styles.container]}>
      <View style={styles.titleSection}>
        <Text style={styles.mainLogoText}>BooFinder </Text>
        <Text style={styles.signUpTitle}>프로필 설정</Text>
        {/* <Image style={styles.logoImage} source={images.puzzle} /> */}
      </View>

      <View style={styles.contentSection}>
        <Text style={styles.contentText}>닉네임을 입력해 주세요[필수]</Text>
        <TextInput
          style={styles.loginInput}
          // onChangeText={onChangeNumber}
          // value={number}
          placeholder="이름"
          keyboardType="numeric"
        />

        <Text style={styles.contentText}>생일을 입력해주세요[선택]</Text>
        <DatePicker date={date} onDateChange={setDate} mode="date" />
      </View>

      <TouchableOpacity
        style={styles.bottomSection}
        onPress={() => {
          navigation.navigate('SetUserScreen', {
            // content: content,
            // noteTitle: route.params.title,
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
    fontSize: fontSizes.md,
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
    height: height * 38,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: colors.darkGrey,
    color: colors.darkGrey,
    fontSize: fontSizes.lg,
    marginBottom: height * 50,
  },
});

export default SetUserScreen;
