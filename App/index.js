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
import DashBoardScreen from '../App/screens/Home/DashBoardScreen';
import CharacterScreen from './screens/CharacterPage/BooFindScreen';
import AuthStack from '../App/navigation/AuthStack';

const StackApp = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

const App = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <StackApp.Navigator presentation="modal">
          <StackApp.Screen
            name="Login"
            component={AuthStack}
            options={navOptionHandler}
          />
          <StackApp.Screen
            name="HomeApp"
            component={MainStack}
            options={navOptionHandler}
          />
        </StackApp.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

export default App;
