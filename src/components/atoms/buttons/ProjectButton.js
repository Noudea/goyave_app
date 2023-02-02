import {Pressable, StyleSheet, Text, View} from 'react-native';
import {TextColors} from '../../../styles/colors';
import Typo from '../../../styles/typo';
import ViewIcon from '../../../assets/icons/icon_titre/svg/voir_plus.svg';

const ProjectButton = ({color, onPress}) => {
  const button = StyleSheet.create({
    container: {
      flex: 1,
      marginLeft: 0,
      marginRight: 0,
      justifyContent: 'center',
      backgroundColor: color,
      alignItems: 'center',
      paddingTop: 15,
      paddingBottom: 15,
      paddingRight: 50,
      paddingLeft: 50,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
  });
  return (
    <Pressable onPress={onPress} style={button.container}>
      <ViewIcon />
      <Text style={[Typo.infos, TextColors.white]}>VOIR PLUS</Text>
    </Pressable>
  );
};

export default ProjectButton;
