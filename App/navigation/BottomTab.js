import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
//custom imports

const Tab = createBottomTabNavigator();

// const TabBarIcon = (focused, name) => {
//   let iconImagePath;
//   let iconSize;

//   if (name === '홈') {
//     iconSize = {width: width * 22.4, height: height * 22};
//     iconImagePath = images.home;
//   } else if (name === '목표설정') {
//     iconSize = {width: width * 18, height: height * 18};
//     iconImagePath = images.dream;
//   } else {
//     iconSize = {width: width * 18.67, height: height * 20};
//     iconImagePath = images.profile;
//   }

//   return <Image source={iconImagePath} style={iconSize} />;
// };

export default function BottomTabNavigator({navigation, route}) {
  //탭 네비게이터 함수
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="홈" component={HomeStack} />
    </Tab.Navigator>
  );
}
