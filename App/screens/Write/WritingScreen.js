import React from 'react';
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';
import {colors, height} from '../../config/globalStyles';

function WritingScreen({navigation}) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.white,
      }}>
      <View>
        <Text>글쓰기 스크린 입니다.</Text>
      </View>
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

export default WritingScreen;
