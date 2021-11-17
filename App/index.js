import React, {useState} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity, Text} from 'react-native';

import LoginScreen from '../App/screens/Auth/LoginScreen';
import SetEmailScreen from './screens/Auth/SetEmailScreen';
import SetCodeScreen from './screens/Auth/SetCodeScreen';
import SetUserScreen from './screens/Auth/SetUserScreen';

import DashBoardScreen from '../App/screens/Home/DashBoardScreen';
const StackApp = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const App = () => {
  return (
    <>
      <NavigationContainer>
        <StackApp.Navigator presentation="modal">
          {/* <StackApp.Screen
            name="Login"
            component={LoginScreen}
            options={navOptionHandler}
          /> */}
          <StackApp.Screen
            name="setEmailScreen"
            component={SetEmailScreen}
            options={navOptionHandler}
          />
          <StackApp.Screen
            name="SetCodeScreen"
            component={SetCodeScreen}
            options={navOptionHandler}
          />
          <StackApp.Screen
            name="SetUserScreen"
            component={SetUserScreen}
            options={navOptionHandler}
          />

          <StackApp.Screen
            name="DashBoard"
            component={DashBoardScreen}
            options={navOptionHandler}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
