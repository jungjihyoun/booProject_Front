import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StateContext from './StateContext';
import DispatchContext from './DispatchContext';
import {useImmerReducer} from 'use-immer';

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
  const initialState = {
    todayDate: new Date().toDateString(),
    userName: '',
    userEmail: '',
    userCode: '',
    userBirth: '',
    userPassword: '',
  };

  function userReducer(draft, action) {
    switch (action.type) {
      case 'setEmail':
        draft.userEmail = action.userEmail;
        console.log('reducerTest', draft.userEmail);
        break;
      case 'setName':
        draft.userName = action.userName;
        console.log('reducerTest', draft.userName);
        break;
      case 'setCode':
        draft.userCode = action.userCode;
        console.log('reducerTest', draft.userCode);
        break;
      case 'setBirth':
        draft.userBirth = action.userBirth;
        console.log('reducerTest', draft.userBirth);
        break;
      case 'setPassword':
        draft.userPassword = action.userPassword;
        console.log('reducerTest', draft.userPassword);
        break;
      default:
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(userReducer, initialState);

  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
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
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
};

export default App;
