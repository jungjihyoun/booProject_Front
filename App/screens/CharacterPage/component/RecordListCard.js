/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {Image, View, Text, TouchableOpacity, Dimensions} from 'react-native';

import {
  height,
  width,
  colors,
  images,
  fontSizes,
  fontWeight,
  fonts,
} from '../../../config/globalStyles';

import {useUsersState} from '../../../userReducer';
import {BooText} from '../../../component/BooText';
import API from '../../../utils/subCharacter';
function RecordListCard({
  onPress,
  startDate,
  title,
  subtitle,
  goal,
  img_path,
  created_date,
  subcharacter_id,
  likePostList,
  likeCount,
  ...props
}) {
  const zero = num => (num < 10 && num >= 0 ? '0' + num : num);
  const state = useUsersState();

  const [heart, setHeart] = useState(false);

  // 좋아요 여부 판단
  useEffect(() => {
    likePostList.map(data => {
      if (data === subcharacter_id) {
        setHeart(true);
      }
    });
  }, [likePostList, subcharacter_id]);

  return (
    <View style={{alignSelf: 'center'}}>
      <View
        style={{
          width: Dimensions.get('window').width,
          overflow: 'hidden',
          marginBottom: 40,
        }}>
        {img_path === null ? (
          <></>
        ) : (
          <Image
            style={{
              width: Dimensions.get('window').width,
              height: 300,
              alignSelf: 'center',
            }}
            source={{uri: img_path}}
          />
        )}

        <View
          style={{
            marginVertical: 10,
            marginLeft: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}>
          <Text style={{fontFamily: fonts.spoqaLight, fontSize: fontSizes.xs}}>
            작성일 {new Date(created_date).toLocaleString().split('오전')[0]}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              marginRight: 20,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            {heart ? (
              <TouchableOpacity
                onPress={() => {
                  setHeart(!heart);
                  API.postLike(state.userID, subcharacter_id, heart);
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 5,
                    tintColor: colors.primary,
                  }}
                  source={images.heart}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  setHeart(!heart);
                  API.postLike(state.userID, subcharacter_id, heart);
                }}>
                <Image
                  style={{
                    width: 25,
                    height: 25,
                    marginRight: 5,
                    tintColor: colors.primary,
                  }}
                  source={images.unheart}
                />
              </TouchableOpacity>
            )}
            <Text
              style={{
                fontSize: fontSizes.lg,
                color: colors.primary,
              }}>
              {likeCount}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: 350,
            alignSelf: 'center',
          }}>
          <BooText
            type="content"
            style={{
              width: '100%',
              fontFamily: fonts.spoqaLight,
              lineHeight: 23,
              marginBottom: 7,
            }}>
            {`${new Date(startDate).getFullYear()}년 ${zero(
              new Date(startDate).getMonth() + 1,
            )}월 ${zero(new Date(startDate).getDate())}일 부터 진행중`}
          </BooText>

          <BooText
            type="title"
            style={{
              width: '100%',
              fontFamily: fonts.spoqaBold,
              marginBottom: 7,
            }}>
            {title}
          </BooText>

          <BooText
            type="content"
            style={{
              width: '100%',
              fontFamily: fonts.spoqaLight,
              lineHeight: 23,
            }}>
            {subtitle}
          </BooText>

          <View
            style={{
              flexDirection: 'row',

              width: 300,
              marginTop: 10,
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <BooText
              type="content"
              color={colors.primary}
              style={{
                marginRight: 10,
                fontFamily: fonts.spoqaBold,
                color: colors.primary,
              }}>
              목표
            </BooText>
            <BooText
              type="content"
              style={{
                width: '100%',
                fontFamily: fonts.spoqaLight,
                lineHeight: 23,
              }}>
              {goal}
            </BooText>
          </View>
        </View>
      </View>
    </View>
  );
}

export {RecordListCard};
