import {Pressable, StyleSheet, Text, TextInput} from 'react-native';
import Typo from '../../../styles/typo';
import {TextColors} from '../../../styles/colors';

const VoteButton = ({outline, color, onPress}) => {
  const button = StyleSheet.create({
    container: {
      justifyContent: 'center',
      backgroundColor: color,
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      paddingRight: 50,
      paddingLeft: 50,
      borderRadius: 50,
      maxWidth: 350,
    },
  });

  const outlineButton = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      paddingRight: 50,
      paddingLeft: 50,
      borderRadius: 50,
      borderWidth: 1,
      borderColor: color,
    },
    text: {
      color: color,
    },
  });

  return (
    <>
      {outline && (
        <Pressable onPress={onPress} style={outlineButton.container}>
          <Text style={[Typo.subInfos, outlineButton.text]}>Outline</Text>
        </Pressable>
      )}
      {!outline && (
        <Pressable onPress={onPress} style={button.container}>
          <Text style={[Typo.subInfos, TextColors.white]}>Not outlined</Text>
        </Pressable>
      )}
    </>
  );
};

export default VoteButton;
