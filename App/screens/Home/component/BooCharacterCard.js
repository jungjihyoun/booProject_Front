/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import {height, width, colors} from '../../../config/globalStyles';

import {BooCard} from '../../../component/BooCard';
import {BooText} from '../../../component/BooText';

function BooCharacterCard({image, onPress, ...props}) {
  return (
    <TouchableOpacity style={{flex: 1, marginHorizontal: 10}}>
      <BooCard
        w={150}
        h={150}
        style={{borderWidth: 2, borderColor: colors.lightGrey}}
        onPress={onPress}
        positionX="center"
        positionY="flex-start">
        <Image
          style={{
            width: width * 150,
            height: height * 100,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={image}
        />
        <View
          style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <BooText type="content" textAlign="center" color={colors.black}>
            {props.children}
          </BooText>
        </View>
      </BooCard>
    </TouchableOpacity>
  );
}

export {BooCharacterCard};
