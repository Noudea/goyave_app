import {StyleSheet} from 'react-native';

const Colors = {
  primary: '#FF0659',
  secondary1: '#15B4B2',
  secondary2: '#FFC406',
  secondary3: '#F89400',
  secondary4: '#45C478',
  secondary5: '#2B5DE4',
  error: '#B00020',
  white: '#FFFFFF',
  black: '#000000',
};

const TextColors = StyleSheet.create({
  primary: {
    color: Colors.primary,
  },
  secondary1: {
    color: Colors.secondary1,
  },
  secondary2: {
    color: Colors.secondary2,
  },
  secondary3: {
    color: Colors.secondary3,
  },
  secondary4: {
    color: Colors.secondary4,
  },
  secondary5: {
    color: Colors.secondary5,
  },
  error: {
    color: Colors.error,
  },
  white: {
    color: Colors.white,
  },
  black: {
    color: Colors.black,
  },
});

const BackgroundColors = StyleSheet.create({
  primary: {
    backgroundColor: Colors.primary,
  },
  secondary1: {
    backgroundColor: Colors.secondary1,
  },
  secondary2: {
    backgroundColor: Colors.secondary2,
  },
  secondary3: {
    backgroundColor: Colors.secondary3,
  },
  secondary4: {
    backgroundColor: Colors.secondary4,
  },
  secondary5: {
    backgroundColor: Colors.secondary5,
  },
  error: {
    backgroundColor: Colors.error,
  },
  white: {
    backgroundColor: Colors.white,
  },
  black: {
    backgroundColor: Colors.black,
  },
});

export {Colors, TextColors, BackgroundColors};
