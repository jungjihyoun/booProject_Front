/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from 'react-native';

import {colors, fontSizes, fonts} from '../../config/globalStyles';

import {useUsersState, useUsersDispatch} from '../../userReducer';
import {HorizontalList} from '../../component/HorizontalList';
import {RecordListCard} from './component/RecordListCard';
import API from '../../utils/record';
import BooAPI from '../../utils/subCharacter';

function BooFindScreen({navigation, route, ...props}) {
  const state = useUsersState();
  const dispatch = useUsersDispatch();
  const subcharacter = state.subcharacter;
  const userID = state.userID;

  const [likePostList, setLikePostList] = useState([]);

  const [otherBoo, setOtherBoo] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // API.getOtherPost(userID, setOtherRecord, setLoading);
    BooAPI.getOtherSubcharacter(userID, setOtherBoo);
    BooAPI.getLike(userID, setLikePostList);

    console.log('좋아요 누른 post', likePostList);
  }, []);

  const onEndReached = () => {
    if (loading) {
      return;
    } else {
      BooAPI.getOtherSubcharacter(userID, setOtherBoo);
    }
  };

  const renderItem = ({item}) => {
    return (
      <RecordListCard
        key={item.subcharacter_id}
        likeCount={item.likeCount}
        likePostList={likePostList}
        subcharacter_id={item.subcharacter_id}
        created_date={item.created_date}
        startDate={item.startDate}
        title={item.title}
        subtitle={item.subtitle}
        goal={item.goal}
        img_path={item.img_path}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.8}
        ListFooterComponent={loading && <ActivityIndicator />}
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}>
      <View
        style={{
          height: 80,
          width: '100%',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontFamily: fonts.spoqaBold,
            fontSize: fontSizes.lg,
            marginLeft: 20,
          }}>
          부캐둘러보기
        </Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={otherBoo}
          renderItem={renderItem}
          keyExtractor={item => item.post_id}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
});

export default BooFindScreen;
