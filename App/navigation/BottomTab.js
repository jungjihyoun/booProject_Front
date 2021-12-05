import React from 'react';
import {Image} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './HomeStack';
//custom imports
import {colors, images, width, height} from '../../App/config/globalStyles';
import ProfileStack from './ProfileStack';
import WriteStack from './WriteStack';
import BooFindStack from './BooFindStack';

const Tab = createBottomTabNavigator();

const TabBarIcon = (focused, name) => {
  let iconImagePath;
  let iconSize;

  switch (name) {
    case '홈':
      iconImagePath = images.home;
      break;
    case '글쓰기':
      iconImagePath = images.write;
      break;
    case '부캐찾기':
      iconImagePath = images.searchBoo;
      break;
    default:
      iconImagePath = images.profile;
      break;
  }

  return (
    <Image
      source={iconImagePath}
      style={{
        width: width * 18,
        height: width * 18,
        tintColor: focused && colors.primary,
      }}
    />
  );
};

export default function BottomTabNavigator() {
  //탭 네비게이터 함수
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        activeTintColor: colors.primary,
        tabBarLabel: route.name,
        tabBarIcon: ({focused}) => TabBarIcon(focused, route.name),
        headerShown: false,
      })}>
      <Tab.Screen name="홈" component={HomeStack} />
      <Tab.Screen name="글쓰기" component={WriteStack} />
      <Tab.Screen name="부캐찾기" component={BooFindStack} />
      <Tab.Screen name="프로필" component={ProfileStack} />
    </Tab.Navigator>
  );
}
