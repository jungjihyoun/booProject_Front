/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, ScrollView} from 'react-native';

import {colors, width} from '../../config/globalStyles';

import {useUsersState, useUsersDispatch} from '../../userReducer';

function BooFindScreen({navigation, route, ...props}) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();

  const subcharacter = state.subcharacter;
  const userID = state.userID;
  //route에ㅐ서 받아오기
  const characterID = 'sub1';

  // useEffect(() => {
  //   const getSubcharacter = () => {
  //     fetchSubcharacter(dispatch, userID);
  //   };
  //   getSubcharacter();
  // }, [dispatch, userID]);
  const filterCharacter = () => {
    // return subcharacter.map(data => {
    //   return data.subcharacter_id === characterID;
    // });
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <View
        style={{
          width: width * 400,
          height: width * 220,
          backgroundColor: colors.primary,
          borderBottomLeftRadius: width * 220,
          borderBottomRightRadius: width * 220,
        }}>
        {/* <Text>{filterCharacter().subcharacter_id}</Text> */}
      </View>

      <ScrollView
        style={{
          flex: 2,
          flexDirection: 'column',
        }}>
        <Text>부캐찾기 페이지입니다.</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default BooFindScreen;
