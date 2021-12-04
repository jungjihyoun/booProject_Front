import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DashBoardScreen from '../screens/Home/DashBoardScreen';

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
    </StackHome.Navigator>
  );
};

export default HomeStack;
