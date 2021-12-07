import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashBoardScreen from '../screens/Home/DashBoardScreen';
import BooEnrollScreen from '../screens/Home/BooEnrollScreen';
import RecordScreen from '../screens/Home/RecordScreen';

const StackHome = createStackNavigator();

import {colors} from '../config/globalStyles';

const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const HomeStack = ({navigation, route}) => {
  return (
    <StackHome.Navigator initialRouteName="HomeScreen">
      <StackHome.Screen
        name="DashBoardScreen"
        component={DashBoardScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="BooEnrollScreen"
        component={BooEnrollScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="RecordScreen"
        component={RecordScreen}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
};

export default HomeStack;
