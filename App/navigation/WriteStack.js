import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WritingScreen from '../screens/Write/WritingScreen';

const StackWrite = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const WriteStack = ({navigation, route}) => {
  return (
    <StackWrite.Navigator>
      <StackWrite.Screen
        name="WritingScreen"
        component={WritingScreen}
        options={navOptionHandler}
      />
    </StackWrite.Navigator>
  );
};

export default WriteStack;
