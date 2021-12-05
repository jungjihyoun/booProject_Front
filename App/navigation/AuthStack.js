import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoginScreen from '../screens/Auth/LoginScreen';
import SetCodeScreen from '../screens/Auth/SetCodeScreen';
import SetEmailScreen from '../screens/Auth/SetEmailScreen';
import SetUserScreen from '../screens/Auth/SetUserScreen';

const StackAuth = createStackNavigator();

import {colors} from '../config/globalStyles';

const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const AuthStack = ({navigation, route}) => {
  return (
    <StackAuth.Navigator initialRouteName="LoginScreen">
      <StackAuth.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={navOptionHandler}
      />
      <StackAuth.Screen
        name="SetCodeScreen"
        component={SetCodeScreen}
        options={navOptionHandler}
      />
      <StackAuth.Screen
        name="SetEmailScreen"
        component={SetEmailScreen}
        options={navOptionHandler}
      />
      <StackAuth.Screen
        name="SetUserScreen"
        component={SetUserScreen}
        options={navOptionHandler}
      />
    </StackAuth.Navigator>
  );
};

export default AuthStack;
