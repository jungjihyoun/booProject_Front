import {Dimensions} from 'react-native';

export const colors = {
  primary: '#8CB3FF',
  primaryB: '#FA9B86',
  black: '#191919',
  white: '#ffffff',
  lightBlue: '#8ED7E1',
  lightGreen: '#6FF1CE',
  textGrey: '#5F6768',
  darkGrey: '#7D7D7D',
  mediumGrey: '#C9C9C9',
  lightGrey: '#EEEEEE',
};

export const fontSizes = {
  appTitle: 48,
  title: 36,
  xl: 24,
  lg: 22,
  md: 18,
  sm: 16,
  xs: 12,
  textInput: Dimensions.get('screen').height <= 650 ? 16 : 20,
};

export const fontWeight = {
  light: '300',
  regular: '400',
  bold: '700',
  extraBold: '800',
};

export const fonts = {
  spoqaRegular: 'SpoqaHanSansNeo-Regular',
  spoqaBold: 'SpoqaHanSansNeo-Bold',
  spoqaLight: 'SpoqaHanSansNeo-Light',
};

export const images = {
  hello: require('../assets/waving-hand.png'),
  puzzle: require('../assets/puzzle.png'),
  home: require('../assets/home.png'),
  profile: require('../assets/profile.png'),
  searchBoo: require('../assets/searchBoo.png'),
  write: require('../assets/write.png'),
  unheart: require('../assets/unheart.png'),
  heart: require('../assets/heart.png'),
  secretCheck: require('../assets/secretCheck.png'),
  boy: require('../assets/boy.png'),
  witchTemp: require('../assets/witchTemp.png'),
};

export const height = (Dimensions.get('screen').height * (1 / 835)).toFixed(2);

export const width = (Dimensions.get('screen').width * (1 / 395)).toFixed(2);
