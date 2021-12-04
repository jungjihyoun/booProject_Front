import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// import StateContext from './StateContext';
// import DispatchContext from './DispatchContext';
// import {useImmerReducer} from 'use-immer';
// import axios from 'axios';
import {UsersProvider} from './userReducer';
import MainStack from './navigation/MainStack';
import HomeStack from './navigation/HomeStack';
import WriteStack from './navigation/WriteStack';
import BooFindStack from './navigation/BooFindStack';
import ProfileStack from './navigation/ProfileStack';

// import LoginScreen from '../App/screens/Auth/LoginScreen';
// import SetEmailScreen from './screens/Auth/SetEmailScreen';
// import SetCodeScreen from './screens/Auth/SetCodeScreen';
// import SetUserScreen from './screens/Auth/SetUserScreen';
import DashBoardScreen from '../App/screens/Home/DashBoardScreen';
import CharacterScreen from '../App/screens/CharacterPage/CharacterScreen';

const StackApp = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const App = navigation => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <StackApp.Navigator presentation="modal">
          {/* <StackApp.Screen
            name="Login"
            component={LoginScreen}
            options={navOptionHandler}
          /> */}

          {/* <StackApp.Screen
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
          /> */}

          <StackApp.Screen
            name="DashBoardScreen"
            component={DashBoardScreen}
            options={navOptionHandler}
          />

          {/* <StackApp.Screen
            name="CharacterScreen"
            component={CharacterScreen}
            options={navOptionHandler}
          /> */}
          {/* 
          <StackApp.Screen
            name="HomeApp"
            component={MainStack}
            options={navOptionHandler}
          /> */}
          {/* <StackApp.Screen
            name="Write"
            component={WriteStack}
            options={navOptionHandler}
          /> */}
          {/* <StackApp.Screen
            name="BooFind"
            component={BooFindStack}
            options={navOptionHandler}
          /> */}
          <StackApp.Screen
            name="Profile"
            component={ProfileStack}
            options={navOptionHandler}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

export default App;
