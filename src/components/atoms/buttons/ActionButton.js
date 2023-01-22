import {Pressable, StyleSheet, Text} from 'react-native';

import Typo from '../../../styles/typo';
import {TextColors} from '../../../styles/colors';

const ActionButton = ({onPress, text, color, outline}) => {
  const button = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: color,
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 50,
      paddingLeft: 50,
      borderRadius: 12,
    },
  });

  const outlineButton = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      paddingBottom: 20,
      paddingRight: 50,
      paddingLeft: 50,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: color,
    },
    text: {
      color: color,
    },
  });

  console.log(color);

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
