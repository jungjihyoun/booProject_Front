import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CharacterScreen from '../screens/CharacterPage/CharacterScreen';
const StackDepth = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const DepthStack = ({navigation, route}) => {
  return (
    <StackDepth.Navigator>
      <StackDepth.Screen
        name="WritingScreen"
        component={CharacterScreen}
        options={navOptionHandler}
      />
    </StackDepth.Navigator>
  );
};

export default DepthStack;
