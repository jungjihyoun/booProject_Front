import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import BooFindScreen from '../screens/CharacterPage/BooFindScreen';

const StackBooFind = createStackNavigator();
const navOptionHandler = () => ({
  headerShown: false,
});
//메인 화면 스택
const BooFindStack = ({navigation, route}) => {
  return (
    <StackBooFind.Navigator initialRouteName="BooFindScreen">
      <StackBooFind.Screen
        name="BooFindScreen"
        component={BooFindScreen}
        options={navOptionHandler}
      />
    </StackBooFind.Navigator>
  );
};

export default BooFindStack;
