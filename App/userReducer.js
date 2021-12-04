import React, {createContext, useReducer, useContext} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useImmerReducer} from 'use-immer';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import StateContext from './StateContext';
// import DispatchContext from './DispatchContext';

import axios from 'axios';

const initialState = {
  todayDate: new Date().toDateString(),
  userName: '',
  userEmail: '',
  userID: 'ecg2sd',
  userBirth: new Date(),
  userPassword: '',
  subcharacter: [], //subcharacter 정보 담는 변수
};

function usersReducer(draft, action) {
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
      draft.userID = action.userID;
      console.log('reducerTest', draft.userID);
      break;
    case 'setBirth':
      draft.userBirth = action.userBirth;
      console.log('userBirth', draft.userBirth);
      break;
    case 'setPassword':
      draft.userPassword = action.userPassword;
      console.log('reducerTest', draft.userPassword);
      break;
    case 'fetchSubcharacter':
      draft.subcharacter = action.subcharacter;
      console.log('fetch subcharacter reducer', action);
      break;
    default:
      break;
  }
}

// State 용 Context 와 Dispatch 용 Context 따로 만들어주기
const StateContext = createContext(null);
const DispatchContext = createContext(null);

export function UsersProvider({children}) {
  const [state, dispatch] = useImmerReducer(usersReducer, initialState);
  return (
    <StateContext.Provider value={state}>
      <DispatchContext.Provider value={dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

// State 를 쉽게 조회 할 수 있게 해주는 커스텀 Hook
export function useUsersState() {
  const state = useContext(StateContext);
  if (!state) {
    throw new Error('Cannot find state');
  }
  return state;
}
// Dispatch 를 쉽게 사용 할 수 있게 해주는 커스텀 Hook
export function useUsersDispatch() {
  const dispatch = useContext(DispatchContext);
  if (!dispatch) {
    throw new Error('Cannot find provider');
  }
  return dispatch;
}

// API Subcharacter fetch
export const fetchSubcharacter = async (dispatch, userID) => {
  await axios
    .get(`http://localhost:8080/subcharacter/${userID}`)
    .then(response => {
      dispatch({type: 'fetchSubcharacter', subcharacter: response.data});
    })
    .catch(error => {
      console.log('부캐릭터 패치에 실패하였습니다');
      console.warn(error);
    });
};
