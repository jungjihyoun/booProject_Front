import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const WriteStack = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const StackWrite = ({navigation, route}) => {
  return (
    <WriteStack.Navigator initialRouteName="WirteScreen"></WriteStack.Navigator>
  );
};

export default StackWrite;
