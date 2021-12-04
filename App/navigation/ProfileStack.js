import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const StackProfile = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const ProfileStack = ({navigation, route}) => {
  return (
    <StackProfile.Navigator initialRouteName="ProfileScreen"></StackProfile.Navigator>
  );
};

export default ProfileStack;
