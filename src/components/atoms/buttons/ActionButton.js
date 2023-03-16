import {Pressable, StyleSheet, Text} from 'react-native';

import Typo from '../../../styles/typo';
import {TextColors} from '../../../styles/colors';

const ActionButton = ({onPress, text, color, outline}) => {
  const button = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: color,
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20,
      paddingLeft: 20,
      borderRadius: 12,
      shadowColor: '#00000029',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 1,
      shadowRadius: 6,
      elevation: 10,
    },
  });

  const outlineButton = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 20,
      paddingLeft: 20,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: color,
      shadowColor: '#00000029',
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 1,
      shadowRadius: 6,
      elevation: 10,
    },
    text: {
      color: color,
    },
  });

  return (
    <>
      {outline && (
        <Pressable style={outlineButton.container} onPress={onPress}>
          <Text style={[Typo.infos, outlineButton.text]}>{text}</Text>
        </Pressable>
      )}
      {!outline && (
        <Pressable style={button.container} onPress={onPress}>
          <Text style={[Typo.infos, TextColors.white]}>{text}</Text>
        </Pressable>
      )}
    </>
  );
};

export default ActionButton;
