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

function BooCharacterCard({image, ...props}) {
  return (
    <TouchableOpacity style={{flex: 1, marginBottom: 20}}>
      <BooCard
        w={370}
        h={280}
        positionX="center"
        positionY="flex-start"
        backgroundColor={colors.white}>
        <Image
          style={{
            width: width * 370,
            height: height * 210,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={image}
        />
        <View
          style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
          <BooText style="subtitle" textAlign="center" color={colors.black}>
            {props.children}
          </BooText>
        </View>
      </BooCard>
    </TouchableOpacity>
  );
}

export {BooCharacterCard};
